import {useState, useEffect} from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import PriceList from '../../components/PriceList/PriceList'
import StarRating from '../../components/StarRating.js/StarRating'
import ResultList from '../../components/ResultList/ResultList'
import CuisineList from '../../components/CuisineList/CuisineList'
import ResultMap from '../../components/ResultMap/ResultMap'

export default function DashboardPage() {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [resultTruck, setResultTruck] = useState([])
  const [starRate, setStarRate] = useState(0)
  const [priceRate, setPriceRate] = useState(0)
  const [cuisines, setCuisines] = useState([])

  useEffect(() => {
      (async () => {
        try {
          // const data = await FoodtruckAPI.getResultTruck(searchParams.get("zipcode"))
          // setResultTruck(data)         
          let zipcode = searchParams.get("zipcode")
          let radius = searchParams.get("radius")
          const zipRadiusData = await FoodtruckAPI.zipRadiusSearch(zipcode,radius)
          console.log(zipRadiusData)
          setResultTruck(zipRadiusData)
          setLoaded(true)
        } catch(e) {
          console.log(e)
        }
      })()
    }, [])

  console.log(cuisines)

  const handleCuisineChange = (cuisine) => {
    const cuisineArray = [...cuisines]
    if (cuisineArray.indexOf(cuisine) === -1) {
      cuisineArray.push(cuisine)
    } else {
      let toDelete = cuisineArray.indexOf(cuisine)
      cuisineArray.splice(toDelete, 1)
    }
    setCuisines(cuisineArray)
  }

  return (
      <main>
        {
          loaded === true &&
          <>
          <h1>This is the Results Page</h1>
          <button onClick={() => navigate('/')}>Home Page</button>
          <div>
            <h2>Filters</h2>
            <CuisineList cuisines={cuisines} setCuisines={setCuisines} handleCuisineChange={handleCuisineChange} />
            <StarRating starRate={starRate} setStarRate={setStarRate} />
            {/* <PriceList resultPageState={resultTruck} /> */}
          </div>
          <ResultList resultTruck={resultTruck} starRate={starRate} priceRate={priceRate} cuisines={cuisines} />
          <ResultMap resultTruck={resultTruck} zipcode={searchParams.get("zipcode")}/>
          </>
        }
      </main>
  );
};