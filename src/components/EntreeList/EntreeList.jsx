

export default function EntreeList({ foodTrucks }) {
    

    return (
        <main>
            <div>
                <h1>This is the Entree Menu</h1>
                {
                    foodTrucks.map((foodTruck) => {
                        return (
                            <div key={foodTruck._id}>
                                <img src={foodTruck.img} height='250' width='300' />
                                <div>
                                    <h5>{foodTruck.foodTruckName}</h5>
                                    <p>{foodTruck.menu.entrees.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </main>
    );
};