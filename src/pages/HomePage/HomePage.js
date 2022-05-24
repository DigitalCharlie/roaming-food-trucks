import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"


export default function HomePage({ foodTrucks, user }) {
    return (
        <>
            <Hero />
            <TrendingFoodTruck foodTrucks={foodTrucks} user={user} />
        </>

    )
}