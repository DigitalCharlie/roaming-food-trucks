import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import TrendingFoodTruck from "../../components/TrendingFTList/trendingFoodTruckList"
import Hero from "../../components/Hero/HeroImage"


export default function HomePage({ foodTrucks, user }) {
    return (
        <>
            <TrendingFoodTruck foodTrucks={foodTrucks} user={user} />
            <NavBar />
            <Hero />
            <Footer />
        </>

    )
}