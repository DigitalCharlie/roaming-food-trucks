
export default function ({resultTruck, starRate, priceRate}) {
    return (
        <div>
            {
                resultTruck.map((truck) => {
                    return (
                        // if star rating was clicked
                        starRate ?
                        // if star rating on filter matches or is less than the truck's current rating
                        starRate <= truck.currentRating ?
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div> :
                        null :
                        //if star rating wasn't, but price was
                        priceRate ?
                        // price rating on filter matches or is less than the truck's current price rating
                        priceRate <= truck.priceRating ?
                        <div>
                            <p>{truck.foodTruckName}</p>
                            <p>Zip code: {truck.location.zipCode}</p>
                            <p>Cuisine: {truck.cuisine}</p>
                        </div> :
                        null :
                        //if Price or Star rating wasn't clicked
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