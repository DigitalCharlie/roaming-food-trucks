import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"
import SearchBox from "../../components/SearchBox/SearchBox"

export default function HomePage({ foodTrucks, user }) {
    return (
        <div>
            <SearchBox />
            <Hero />
<<<<<<< HEAD
            <TrendingFoodTruck foodTrucks={foodTrucks} user={user} />
        </>
=======
            <main>
                <TrendingFoodTruck foodTrucks={foodTrucks} user={user} />
            </main>
        </div>
>>>>>>> 5a97bf29278edfc4c9d7ba99389ac10bc00d8f7d

    )
}