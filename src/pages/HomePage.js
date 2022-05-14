import Footer from "../components/Footer/Footer"
import TrendingFoodTruck from "../components/TrendingFTList/trendingFoodTruckList"


export default function HomePage({foodTrucks}){
    return (
        <main>
            <TrendingFoodTruck foodTrucks={foodTrucks}/>
            <Footer />
        </main>
    )
}