import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"


export default function HomePage({ foodTrucks, user }) {
    return (
        <main>
            <Hero />
            <TrendingFoodTruck foodTrucks={foodTrucks} />
        </main>

    )
}