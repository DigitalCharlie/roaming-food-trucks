import { useState, useEffect } from "react"
import * as foodTruckAPI from '../../utilities/foodTruck-api'

import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"
import SearchBox from "../../components/SearchBox/SearchBox"

export default function HomePage({ user }) {

    const [foodTrucks, setFoodTrucks] = useState([])

    useEffect(() => {
        (async () => {
          try {
            const data = await foodTruckAPI.getAll() // THIS ACTUALLY ONLY GETS THE TRENDING ONES NOW
            setFoodTrucks(data)
          } catch (e) {
            console.log(e)
          }
        })()
      }, [])

    return (
        <div>
            <SearchBox />
            <Hero />
            <main>
                <TrendingFoodTruck foodTrucks={foodTrucks} user={user} />
            </main>
        </div>

    )
}