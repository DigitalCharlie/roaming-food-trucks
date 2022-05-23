import {useState, useEffect} from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import PriceList from '../../components/PriceList/PriceList'
import StarRating from '../../components/StarRating.js/StarRating'
import ResultList from '../../components/ResultList/ResultList'
import CuisineList from '../../components/CuisineList/CuisineList'
import styles from './ResultsPage.module.css'


export default function DashboardPage() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [resultTruck, setResultTruck] = useState([])
    const [starRate, setStarRate] = useState(0)
    const [priceRate, setPriceRate] = useState(0)
    const [cuisine, setCuisine] = useState('null')
    const zipURL = searchParams.get("zipcode")
    const cuisineURL = searchParams.get("cuisine")
    // loads the page and refreshes it everytime zip code is changed in the search bar
    useEffect(() => {
        (async () => {
          try {
            const data = await FoodtruckAPI.getResultTruck(zipURL)
            setResultTruck(data)
          } catch(e) {
            console.log(e)
          }
        })()
      }, [zipURL])


      // changes cuisine query without refreshing the page
      useEffect(() => {
        setSearchParams({zipcode: zipURL, cuisine: cuisine})
      }, [cuisine])

    return (
        <div className={styles.ResultPage}>
            <h1>This is the Results Page</h1>
            <button onClick={() => navigate('/')}>Home Page</button>
            <div>
              <div className={styles.firstColumn}>
                <h2>Filters</h2>
                <CuisineList cuisine={cuisine} setCuisine={setCuisine} cuisineURL={cuisineURL} />
                <StarRating starRate={starRate} setStarRate={setStarRate} />
                {/* <PriceList resultPageState={resultTruck} /> */}
              </div>
              <div className={styles.secondColumn}>
                <ResultList resultTruck={resultTruck} starRate={starRate} priceRate={priceRate} cuisine={cuisine} />
              </div>
              <div className={styles.thirdColumn}>
                <h2>Map Picture</h2>
              </div>
            </div>
        </div>
    );
};