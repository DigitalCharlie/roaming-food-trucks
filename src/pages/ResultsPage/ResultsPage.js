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
  const [cuisine, setCuisine] = useState('')
  const [zipRadius, setZipRadius] = useState(5)

    useEffect(() => {
        (async () => {
          try {
            const data = await FoodtruckAPI.getResultTruck(searchParams.get("zipcode"))
            setResultTruck(data)
            // const zipAsLatLng = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.MAPS_KEY}&address=${searchParams.get("zipcode")}`)
            // console.log(zipAsLatLng)
            // const zipSearchPayload = {
            //   lat:zipAsLatLng.data.results[0].geometry.location.lat,
            //   lng:zipAsLatLng.data.results[0].geometry.location.lng,
            //   radius:zipRadius
            // }              
            let zipcode = searchParams.get("zipcode")
            let radius = searchParams.get("radius")
            const zipRadius = await FoodtruckAPI.zipRadiusSearch(zipcode,radius)
            console.log(zipRadius)
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