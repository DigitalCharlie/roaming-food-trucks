import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"
import SearchBox from "../../components/SearchBox/SearchBox"

export default function HomePage({ foodTrucks, user }) {
    return (
        <div>
            <SearchBox />
            <Hero />
            <main>
                <TrendingFoodTruck foodTrucks={foodTrucks} user={user} />
            </main>
        </div>

    )
}