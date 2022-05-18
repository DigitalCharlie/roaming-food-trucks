import DrinksList from "../../components/DrinksList/DrinksList";
import EntreeList from "../../components/EntreeList/EntreeList";

export default function FTDetailsPage({ foodTrucks }) {
    return (
        <div>
            <h1>This is the Food Truck Details Page</h1>
            <DrinksList />
            <EntreeList foodTrucks={foodTrucks}/>
        </div>
    );
};