

export default function EntreeList({ foodTrucks }) {
    

    return (
        <main>
            <div>
                <h4>Entrees</h4>
                {
                    foodTrucks.map((foodTruck) => {
                        console.log(foodTruck)
                        return (
                            <div key={foodTruck._id}>
                                <div>
                                    <h5>{foodTruck.foodTruckName}</h5>
                                    {foodTruck.menu.entrees.map((entree) =>{
                                        return <p>{entree.description}</p>
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