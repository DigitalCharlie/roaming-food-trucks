

import AppetizerList from "../../components/AppetizerList/AppetizerList";

export default function FTDetailsPage({foodTrucks}) {
    return (
        <div>
            <h1>This is the Food Truck Details Page</h1>


            <AppetizerList foodTrucks={foodTrucks}/>
        </div>
    );
};