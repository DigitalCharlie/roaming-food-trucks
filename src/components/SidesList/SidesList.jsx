import styles from "./SidesList.module.css";

export default function SidesList({ foodTruck }) {
    const menu = foodTruck.menu;

    return (
        <div className={styles.SidesList}>
            <div>
                <ul>
                    <li className={`${styles.sidesList} menu-section`}>
                        {
                            menu ?
                            menu.sides.map((side, idx) => {
                                return (
                                    <div key={idx} className="dish">
                                        <div className="dish-topline">
                                            <p className="dish-name">{side.dishName}</p>
                                            <p className="dish-price">${side.price}</p>
                                        </div>
                                        <p>{side.description}</p>
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