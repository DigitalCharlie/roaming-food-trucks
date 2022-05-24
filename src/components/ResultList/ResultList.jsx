import { useNavigate } from "react-router-dom"
import styles from './ResultList.module.css'

export default function ({resultTruck, starRate, priceRate, cuisines}) {
const navigate = useNavigate()

    const starFilter = (truck) => {
        if (!starRate) return truck
        if (truck.currentRating >= starRate) return truck
    }

    const priceFilter = (truck) => {
        if (!priceRate) return truck
        if (truck.priceRating >= priceRate) return truck
    }

    const cuisineFilter = (truck) => {
        if (cuisines.length === 0) return truck
        if (cuisines.some(cuisine => truck.cuisine.includes(cuisine))) return truck
    }

    return (
        <>
            <div className={styles.Card}>
                {
                    resultTruck.filter(starFilter).filter(priceFilter).filter(cuisineFilter).length === 0 ?
                        <>
                            <h3>No trucks match your criteria.</h3>
                        </>
                    :
                    resultTruck.filter(starFilter).filter(priceFilter).filter(cuisineFilter).map((truck) => (
                        <div key={truck._id} onClick={() => navigate(`/foodtruck/detailpage/${truck._id}`)} >
                            <img src={truck.img} height='250' width='300' />
                            <div className={styles.Banner}>
                                <div className={styles.BannerTitle}>
                                    <h5>{truck.foodTruckName}</h5>
                                    <p>{truck.currentRating ? truck.currentRating.toFixed(1) : null}</p>
                                </div>
                                <p>Wait time</p>
                                <p>{truck.location.street}, {truck.location.city} </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}