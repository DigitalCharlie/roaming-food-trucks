import {useState, useEffect} from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import PriceList from '../../components/PriceList/PriceList'
import StarRating from '../../components/StarRating.js/StarRating'
import ResultList from '../../components/ResultList/ResultList'


export default function DashboardPage() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [resultTruck, setResultTruck] = useState([])
    useEffect(() => {
        (async () => {
          try {
            const data = await FoodtruckAPI.getResultTruck(searchParams.get("zipcode"))
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
            <div>
              <h2>Filters</h2>
              <StarRating />
              {/* <PriceList resultPageState={resultTruck} /> */}
            </div>
            <ResultList resultTruck={resultTruck} />
        </div>
    );
};