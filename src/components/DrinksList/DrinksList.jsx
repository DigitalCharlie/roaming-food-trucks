import styles from "./DrinksList.module.css";

export default function DrinksList({ foodTruck }) {
    const menu = foodTruck.menu;

    return (
        <div className={styles.DrinksList}>
            <div>
                <ul>
                    <li className={styles.drinksList}>
                        {
                            menu ?
                            menu.drinks.map((drink, idx) => {
                                return (
                                    <div key={idx}>
                                        <p>{drink.description}</p>
                                        <p>${drink.price}</p>
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