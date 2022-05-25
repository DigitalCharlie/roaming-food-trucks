import styles from "./EntreeList.module.css";

export default function EntreeList({ foodTruck }) {
    const menu = foodTruck.menu;
    
    return (
        <div className={styles.EntreeList}>
            <div>
                <ul>
                    <li className={`${styles.entreeList} menu-section`}>
                        {
                            menu ?
                            menu.entrees.map((entree, idx) => {
                                return (
                                    <div key={idx} className="dish">
                                        <div className="dish-topline">
                                        <p className="dish-name">{entree.dishName}</p>
                                        <p className="dish-price">${entree.price}</p>
                                        </div>
                                        <p>{entree.description}</p>
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