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
                <p>Test</p>
                {
                    resultTruck.filter(starFilter).filter(priceFilter).filter(cuisineFilter).map((truck) => (
                        <div>
                                <p>{truck.foodTruckName}</p>
                                <p>Zip code: {truck.location.zipCode}</p>
                                <p>Cuisine: {truck.cuisine}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}