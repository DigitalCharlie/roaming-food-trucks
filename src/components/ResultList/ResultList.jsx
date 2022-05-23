import { Link } from "react-router-dom"

export default function ({resultTruck, starRate, priceRate, cuisines}) {


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
            <div>
                {
                    resultTruck.filter(starFilter).filter(priceFilter).filter(cuisineFilter).length === 0 ?
                        <>
                            <h3>No trucks match your criteria.</h3>
                        </>
                    :
                    resultTruck.filter(starFilter).filter(priceFilter).filter(cuisineFilter).map((truck) => (
                        <div key={truck._id}>
                                <p><Link to={`/foodtruck/detailpage/${truck._id}`}>{truck.foodTruckName}</Link></p>
                                <p>Zip code: {truck.location.zipCode}</p>
                                <p>Cuisine: {truck.cuisine}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}