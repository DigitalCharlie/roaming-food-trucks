import styles from "./AppetizersList.module.css";

export default function AppetizersList({ foodTruck }) {
    const menu = foodTruck.menu;

    return (
        <div className={styles.AppetizersList}>
            <div>
                <ul>
                    <li className={`${styles.appsList} menu-section`}>
                        {
                            menu ?
                            menu.apps.map((app, idx) => {
                                return (
                                    <div key={idx} className="dish">
                                        <div className="dish-topline">
                                            <p className="dish-name">{app.dishName}</p>
                                            <p className="dish-price">${app.price}</p>
                                        </div>
                                        <p className="dish-description">{app.description}</p>
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