import DrinksList from "../../components/DrinksList/DrinksList";
import EntreeList from "../../components/EntreeList/EntreeList";

import SidesList from "../../components/SidesList/SidesList";
import DessertsList from "../../components/DessertsList/DessertsList";
export default function FTDetailsPage({ foodTrucks }) {
    return (
        <div>
            <h1>This is the Food Truck Details Page</h1>
            <DrinksList foodTrucks={foodTrucks} />
            <EntreeList foodTrucks={foodTrucks}/>

            <SidesList foodTrucks={foodTrucks} />
            <DessertsList foodTrucks={foodTrucks} />
        </div>
    );
};