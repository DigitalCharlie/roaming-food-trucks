import { useNavigate } from "react-router-dom"

export default function TrendingFoodTruck({foodTrucks}) {
    const navigate = useNavigate()
    return (
        <main>
            <h1>Top Trending Food Trucks</h1>
            <div className="cards-grid">
                {
                    foodTrucks.map((foodTruck, idx) => {
                        return(
                            // returns only the first 6 fodd trucks
                            idx < 6 &&
                            <div key={foodTruck._id} onClick={() => {navigate(`${foodTruck._id}`)}} className="card" style={{backgroundImage: `url(${foodTruck.image})`}} >
                                <div className="banner">
                                    <div className="banner-title">
                                        <h3>{foodTruck}</h3>
                                        <p>{foodTruck.currentRating.toFixed(1)}</p>
                                    </div>
                                    <p>Wait time</p>
                                    <p>{foodTruck.location[0].street}, {foodTruck.location[0].city} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}