import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"


export default function HomePage({ foodTrucks }) {
    return (
        <>
            <TrendingFoodTruck foodTrucks={foodTrucks} />
            <NavBar />
            <Hero />
            <Footer />
        </>

    )
}