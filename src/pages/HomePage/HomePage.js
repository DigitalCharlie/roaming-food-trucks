import NavBar from "../../components/NavBar/NavBar"
import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"


export default function HomePage({ foodTrucks }) {
    return (
        <>
        <NavBar />
        <Hero />
            <TrendingFoodTruck foodTrucks={foodTrucks} />
        </>

    )
}