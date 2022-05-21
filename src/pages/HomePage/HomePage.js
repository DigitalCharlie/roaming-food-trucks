import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"


export default function HomePage({ foodTrucks }) {
    return (
        <>
        <Hero />
        <TrendingFoodTruck foodTrucks={foodTrucks} />
        </>

    )
}