
export default function ({resultTruck, starRate, priceRate, cuisine}) {


    const starFilter = (truck) => {
        if (!starRate) return truck
        if (truck.currentRating >= starRate) return truck
    }

    const priceFilter = (truck) => {
        if (!priceRate) return truck
        if (truck.priceRating >= priceRate) return truck
    }

    return (
        <>
            <div>
                <p>Test</p>
                {
                    resultTruck.filter(starFilter).filter(priceFilter).map((truck) => (
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