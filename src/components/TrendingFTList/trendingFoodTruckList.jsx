import { Link } from "react-router-dom"
import styles from './trendingFoodTruckList.module.css'
import { useState, useEffect } from 'react'
import * as userAPI from '../../utilities/users-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StarDisplay from "../StarDisplay/StarDisplay"

export default function TrendingFoodTruck({ foodTrucks, user }) {
    const [userFavorites, setUserFavorites] = useState([])
    const heartChoice = (truckId) => {
        const found = userFavorites.find(truck => truck._id === truckId)
        if(found){
            return "fa-solid fa-heart"
        } else {
            return "fa-regular fa-heart"
        }
    }
    const addFavorites = async (truckId) => {
        try {
            const favoriteTruck = { truck: truckId }
            const editedUser = await userAPI.newFavorite(user._id, favoriteTruck)
            console.log(editedUser)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const populatedUser = await userAPI.getUserFavorites(user._id)
                setUserFavorites(populatedUser.favorites)
            } catch(e) {
                console.log(e)
            }
        })()
    }, [])
    console.log(user)

    
    return (
        <div>
            <h3>Top Trending Food Trucks</h3>
            <div className={styles.Card}>
                {
                    foodTrucks.map((foodTruck, idx) => {
                        return (
                            <div key={foodTruck._id} >
                                <img src={foodTruck.img} height='250' width='300' />
                                <div className={styles.Banner}>
                                    <div className={styles.BannerTitle}>
                                        <h5><Link to={`/foodtruck/detailpage/${foodTruck._id}`}>{foodTruck.foodTruckName}</Link> <FontAwesomeIcon className={styles.Icon}  icon={`${heartChoice(foodTruck._id)}`} onClick={() => { addFavorites(foodTruck._id) }} /></h5>
                                        <p>{foodTruck.currentRating && <StarDisplay foodTruck={foodTruck} options={{edit:false, displayNumber:true, singleStar:true}}/>}</p>
                                    </div>
                                    <p>Wait time</p>
                                    <p>{foodTruck.location.street}, {foodTruck.location.city} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}