import styles from "./DessertsList.module.css";

export default function DessertsList({ foodTruck }) {
    const menu = foodTruck.menu

    return (
        <div className={styles.DessertsList}>
            <div>
                <ul>
                    <li className={`${styles.dessertsList} menu-section`}>
                        {
                            menu ?
                            menu.desserts.map((dessert, idx) => {
                                return (
                                    <div key={idx} className="dish">
                                        <div className="dish-topline">
                                        <p className="dish-name">{dessert.dishName}</p>
                                        <p className="dish-price">${dessert.price}</p>
                                        </div>
                                        <p>{dessert.description}</p>


                                    </div>
                                )
                            })
                            :
                            null
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};