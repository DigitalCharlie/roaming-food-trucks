

export default function DrinksList({ foodTrucks }) {
    return (
        <main>
            <div>
                <h1>This is the Drink Menu</h1>
                
                {
                    // foodTrucks.map((foodTruck, idx) => {
                    //     return (
                    //         // returns only the first 6 food trucks
                    //         // idx < 6 &&
                    //         // <div key={foodTruck._id} /*onClick={() => { navigate(`${foodTruck._id}`) }}*/ >
                    //         //     <img src={foodTruck.img} height='250' width='300' />
                    //         //     <div>
                    //         //         <div>
                    //         //             <h5>{foodTruck.foodtruckName}</h5>
                    //         //             <p>{foodTruck.currentRating ? foodTruck.currentRating.toFixed(1) : null}</p>
                    //         //         </div>
                    //         //         <p>Wait time</p>
                    //         //         <p>{foodTruck.location.street}, {foodTruck.location.city} </p>
                    //         //     </div>
                    //         // </div>
                    //     )
                    // })
                }
            </div>
        </main>
    );
};