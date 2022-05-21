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
    const [starRate, setStarRate] = useState(0)
    const [priceRate, setPriceRate] = useState(0)
    const [cuisine, setCuisine] = useState('')
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
              <CuisineList cuisine={cuisine} setCuisine={setCuisine} />
              <StarRating starRate={starRate} setStarRate={setStarRate} />
              {/* <PriceList resultPageState={resultTruck} /> */}
            </div>
            <ResultList resultTruck={resultTruck} starRate={starRate} priceRate={priceRate} cuisine={cuisine} />
        </div>
    );
};