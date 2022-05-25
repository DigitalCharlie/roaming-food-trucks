import styles from "./AppetizersList.module.css";

export default function AppetizersList({ foodTruck }) {
    const menu = foodTruck.menu;

    return (
        <div className={styles.AppetizersList}>
            <div>
                <ul>
                    <li className={styles.appsList}>
                        {
                            menu ?
                            menu.apps.map((app, idx) => {
                                return (
                                    <div key={idx}>
                                        <p>{app.dishName}</p>
                                        <p>{app.description}</p>
                                        <p>${app.price}</p>
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