import {useState, useEffect} from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import * as FoodtruckAPI from '../../utilities/foodTruck-api'


export default function DashboardPage() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [resultTruck, setResultTruck] = useState([])
    useEffect(() => {
        (async () => {
          try {
            const data = await FoodtruckAPI.getResultTruck(searchParams.get("zipcode"), searchParams.get("cuisine"))
            setResultTruck(data)
          } catch(e) {
            console.log(e)
          }
        })()
      }, [])

    return (
        <div>
            <h1>This is the Results Page</h1>
            <button onClick={() => navigate('/')}>Home Page</button>
            {
                resultTruck.map((truck) => {
                    return (
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};