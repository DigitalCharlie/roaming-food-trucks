
export default function ({resultTruck, starRate, priceRate, cuisine}) {
    return (
        <div>
            {
                resultTruck.map((truck) => {
                    return (
                        // if star rating was clicked
                        starRate !== 0 ?
                        // if star rating on filter matches or is less than the truck's current rating
                        starRate <= truck.currentRating ?
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div> :
                        null :
                        //if price was clicked
                        priceRate !== 0 ?
                        // price rating on filter matches or is less than the truck's current price rating
                        priceRate <= truck.priceRating ?
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div> :
                        null :
                        // if cuisine was clicked
                        cuisine !== '' ?
                        // cuisine hook matches cuisine type on page
                        cuisine == truck.cuisine ?
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div> :
                        null :
                        // If nothing was clicked
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}