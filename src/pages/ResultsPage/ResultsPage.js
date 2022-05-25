import {useState, useEffect} from 'react'
import { useSearchParams } from "react-router-dom"
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import PriceList from '../../components/PriceList/PriceList'
import StarRating from '../../components/StarRating.js/StarRating'
import ResultList from '../../components/ResultList/ResultList'
import CuisineList from '../../components/CuisineList/CuisineList'
import ResultMap from '../../components/ResultMap/ResultMap'
import SearchBox from '../../components/SearchBox/SearchBox'
import DistanceList from '../../components/DistanceList/DistanceList'
import styles from './ResultsPage.module.css'

export default function DashboardPage() {
  const [loaded, setLoaded] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [resultTruck, setResultTruck] = useState([])
  const [starRate, setStarRate] = useState(0)
  const [priceRate, setPriceRate] = useState(0)
  const [cuisines, setCuisines] = useState([])
  const [newRadius, setNewRadius] = useState(5)
  const [toggle, setToggle] = useState(false)
  const [refresh, setRefresh] = useState(false)
  let radius = searchParams.get("radius")
  let zipcode = searchParams.get("zipcode")
  let cuisineQry = searchParams.get("cuisine")


  useEffect(() => {
      (async () => {
        try {
          // const data = await FoodtruckAPI.getResultTruck(searchParams.get("zipcode"))
          // setResultTruck(data)         
          const zipRadiusData = await FoodtruckAPI.zipRadiusSearch(zipcode,radius)
          setResultTruck(zipRadiusData)
          setLoaded(true)
        } catch(e) {
          console.log(e)
        }
      })()
    }, [refresh])

  const handleCuisineChange = (cuisine) => {
    const cuisineArray = [...cuisines]
    if (cuisineArray.indexOf(cuisine) === -1) {
      cuisineArray.push(cuisine)
      setCuisines(cuisineArray)
    } else {
      let toDelete = cuisineArray.indexOf(cuisine)
      cuisineArray.splice(toDelete, 1)
      setCuisines(cuisineArray)
    }
    if(cuisineArray.length > 0){
      console.log(cuisineArray)
      setSearchParams({zipcode: zipcode, cuisine: cuisineArray.join(', '), radius: radius})
    } else {
      setSearchParams({zipcode: zipcode, cuisine: 'null', radius: radius})
    }
  }

  useEffect(() => {
    if(loaded){
      setSearchParams({zipcode: zipcode, cuisine: cuisineQry, radius: newRadius})
      setRefresh(!refresh)
    }

  }, [toggle])


  const handleRadiusChange = (rad) => {
    setNewRadius(rad)
    setToggle(!toggle)
  }

  return (
      <main className={styles.ResultPage}>
        {
          loaded === true &&
          <>
          {
            resultTruck.length === 0 ?
            <>
              <h3>No trucks found in your area. Please try again.</h3>
              <SearchBox />
            </>
            :
            <div>
              <div className={styles.firstColumn}>
                <h2>Filters</h2>
                <DistanceList const handleRadiusChange={handleRadiusChange} newRadius={newRadius} />
                <CuisineList  handleCuisineChange={handleCuisineChange} setCuisines={setCuisines} cuisines={cuisines} />
                <StarRating starRate={starRate} setStarRate={setStarRate} />
                <PriceList resultPageState={resultTruck} priceRate={priceRate} setPriceRate={setPriceRate} />
              </div>
              <div className={styles.secondColumn}>
                <ResultList resultTruck={resultTruck} starRate={starRate} priceRate={priceRate} cuisines={cuisines} />
              </div>
              <div className={styles.thirdColumn}>
                <ResultMap resultTruck={resultTruck} zipcode={searchParams.get("zipcode")}/>
              </div>
            </div>
          }

          </>
        }
      </main>
  );
};