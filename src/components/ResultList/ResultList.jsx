import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from './ResultList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarDisplay from "../StarDisplay/StarDisplay"

export default function ({resultTruck, starRate, priceRate, cuisines, filteredList, setFilteredList}) {

    useEffect(() => {
          setFilteredList(resultTruck.filter(starFilter).filter(priceFilter).filter(cuisineFilter))
      }, [starRate, priceRate, cuisines, resultTruck])

    const navigate = useNavigate()

    const starFilter = (truck) => {
        if (!starRate) return truck
        if (truck.currentRating >= starRate) return truck
    }

    const priceFilter = (truck) => {
        if (!priceRate) return truck
        if (truck.priceRating === priceRate) return truck
    }

    const cuisineFilter = (truck) => {
        if (cuisines.length === 0) return truck
        if (cuisines.some(cuisine => truck.cuisine.includes(cuisine))) return truck
    }

    return (
        <>
            <div className={styles.Card}>
                {
                    filteredList.length === 0 ?
                        <>
                            <h3>No trucks match your criteria.</h3>
                        </>
                    :
                    filteredList.map((truck) => (
                        <div key={truck._id} onClick={() => navigate(`/foodtruck/detailpage/${truck._id}`)} >
                            <img src={truck.img} className={styles.truckImage} />
                            <div className={styles.Banner}>
                                <div className={styles.BannerTitle}>
                                    <h4>{truck.foodTruckName}</h4>
                                </div>
                                <p className={styles.grayText}>                                {
                                    truck.priceRating === 1 ? "$" : truck.priceRating === 2 ? "$$" : truck.priceRating === 3 ? "$$$" : "$$$$"
                                } — {truck.cuisine.join(', ')}</p>
                                {
                                    truck.currentRating ?
                                    <StarDisplay foodTruck={truck} options={{edit:false, displayNumber:true}} />
                                    : 
                                    <div>No reviews yet</div>
                                }
                                <br />
                                <p className={styles.TruckText}>{truck.description}</p>
                                <br />
                                <div className={styles.TruckStats}>
                                <p className={styles.TruckText}><FontAwesomeIcon className={styles.Icon} icon="fa-solid fa-clock" /> Wait time: None</p>
                                <p className={styles.TruckText}><img src="/assets/tiny_truck.png" width='20px'></img> {truck.location.street}, {truck.location.city} </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}