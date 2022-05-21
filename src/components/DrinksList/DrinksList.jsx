export default function DrinksList({ foodTrucks }) {
    

    return (
        <main>
            <div>
                <h4>Drinks</h4>
                {
                    foodTrucks.map((foodTruck) => {
                        console.log(foodTruck)
                        return (
                            <div key={foodTruck._id}>
                                <div>
                                    <h5>{foodTruck.foodTruckName}</h5>
                                    {foodTruck.menu.drinks.map((drink) =>{
                                        return <p>{drink.description}</p>
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