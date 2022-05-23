import styles from "./SidesList.module.css";

export default function SidesList({ foodTruck }) {
    const menu = foodTruck.menu;

    return (
        <div className={styles.SidesList}>
            <div>
                <ul>
                    <li className={styles.sidesList}>
                        {
                            menu ?
                            menu.sides.map((side, idx) => {
                                return (
                                    <div key={idx}>
                                        <p>{side.description}</p>
                                        <p>${side.price}</p>
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