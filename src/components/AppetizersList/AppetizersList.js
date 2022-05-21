export default function AppetizersList({ foodTrucks }) {
    

    return (
        <main>
            <div>
                <h4>Appetizers</h4>
                {
                    foodTrucks.map((foodTruck) => {
                        console.log(foodTruck)
                        return (
                            <div key={foodTruck._id}>
                                <div>
                                    <h5>{foodTruck.foodTruckName}</h5>
                                    {foodTruck.menu.apps.map((app) =>{
                                        return <p>{app.description}</p>
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    );
};