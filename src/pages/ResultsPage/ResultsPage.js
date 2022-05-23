import {useState, useEffect} from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import PriceList from '../../components/PriceList/PriceList'
import StarRating from '../../components/StarRating.js/StarRating'
import ResultList from '../../components/ResultList/ResultList'
import CuisineList from '../../components/CuisineList/CuisineList'


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
        <div>
            <h1>This is the Results Page</h1>
            <button onClick={() => navigate('/')}>Home Page</button>
            <div className='row'>
              <div className='first-column'>
                <h2>Filters</h2>
                <CuisineList cuisine={cuisine} setCuisine={setCuisine} cuisineURL={cuisineURL} />
                <StarRating starRate={starRate} setStarRate={setStarRate} />
                {/* <PriceList resultPageState={resultTruck} /> */}
              </div>
              <div className='second-column'>
                <ResultList resultTruck={resultTruck} starRate={starRate} priceRate={priceRate} cuisine={cuisine} />
              </div>
              <div className='third-column'>
                <h2>Map Picture</h2>
              </div>
            </div>
        </div>
    );
};