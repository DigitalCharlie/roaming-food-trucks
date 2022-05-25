import styles from "./DrinksList.module.css";

export default function DrinksList({ foodTruck }) {
    const menu = foodTruck.menu;

    return (
        <div className={styles.DrinksList}>
            <div>
                <ul>
                    <li className={`${styles.drinksList} menu-section`}>
                        {
                            menu ?
                            menu.drinks.map((drink, idx) => {
                                return (
                                    <div key={idx} className="dish">
                                        <div className="dish-topline">
                                        <p className="dish-name">{drink.dishName}</p>
                                        <p className="dish-price">${drink.price}</p>
                                        </div>
                                        <p>{drink.description}</p>

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