import styles from "./DessertsList.module.css";

export default function DessertsList({ foodTruck }) {
    const menu = foodTruck.menu

    return (
        <div className={styles.DessertsList}>
            <div>
                <ul>
                    <li className={styles.dessertsList}>
                        {
                            menu ?
                            menu.desserts.map((dessert, idx) => {
                                return (
                                    <div key={idx}>
                                        <p>{dessert.dishName}</p>
                                        <p>{dessert.description}</p>
                                        <p>${dessert.price}</p>
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