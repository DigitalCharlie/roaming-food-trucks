import { Link } from "react-router-dom"
import styles from './trendingFoodTruckList.module.css'
import { useState, useEffect } from 'react'
import * as userAPI from '../../utilities/users-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StarDisplay from "../StarDisplay/StarDisplay"
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon"

import TruckCards from "../TruckCards/TruckCards"

export default function TrendingFoodTruck({ foodTrucks, user }) {
    const [userFavorites, setUserFavorites] = useState([])

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
    
    return (
        <div>
            <h3>Top Trending Food Trucks</h3>
            <TruckCards truckArray={foodTrucks} />
        </div>
    )
}