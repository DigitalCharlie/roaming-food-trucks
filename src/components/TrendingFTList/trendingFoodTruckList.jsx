// import { useNavigate } from "react-router-dom"
import styles from './trendingFoodTruckList.module.css'
import { useState } from 'react'
import * as userAPI from '../../utilities/users-api'

export default function TrendingFoodTruck({ foodTrucks, user }) {
    // const navigate = useNavigate()
    const [id, setId] = useState("")
    const addFavorites = async (truckId) => {
        try {
            const favoriteTruck = { truck: truckId }
            const editedUser = await userAPI.newFavorite(user._id, favoriteTruck)
            console.log(editedUser)
        } catch (err) {
            console.log(err)
        }
    }
    console.log(user)
    return (
        <main>
            <h3>Top Trending Food Trucks</h3>
            <div className={styles.Card}>
                {
                    foodTrucks.map((foodTruck, idx) => {
                        return (
                            // returns only the first 6 food trucks
                            idx < 6 &&
                            <div key={foodTruck._id} onClick={() => { addFavorites(foodTruck._id) }} /*onClick={() => { navigate(`${foodTruck._id}`) }}*/ >
                                <img src={foodTruck.img} height='250' width='300' />
                                <div className={styles.Banner}>
                                    <div className={styles.BannerTitle}>
                                        <h5>{foodTruck.foodtruckName}</h5>
                                        <p>{foodTruck.currentRating ? foodTruck.currentRating.toFixed(1) : null}</p>
                                    </div>
                                    <p>Wait time</p>
                                    <p>{foodTruck.location.street}, {foodTruck.location.city} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}