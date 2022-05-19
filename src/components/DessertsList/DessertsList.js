export default function DessertsList({ foodTrucks }) {
    

    return (
        <main>
            <div>
                <h4>Desserts</h4>
                {
                    foodTrucks.map((foodTruck) => {
                        console.log(foodTruck)
                        return (
                            <div key={foodTruck._id}>
                                <div>
                                    <h5>{foodTruck.foodTruckName}</h5>
                                    {foodTruck.menu.desserts.map((dessert) =>{
                                        return <p>{dessert.description}</p>
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