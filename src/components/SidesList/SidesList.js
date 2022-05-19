export default function SidesList({ foodTrucks }) {
    

    return (
        <main>
            <div>
                <h4>Sides</h4>
                {
                    foodTrucks.map((foodTruck) => {
                        console.log(foodTruck)
                        return (
                            <div key={foodTruck._id}>
                                <div>
                                    <h5>{foodTruck.foodTruckName}</h5>
                                    {foodTruck.menu.sides.map((side) =>{
                                        return <p>{side}</p>
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