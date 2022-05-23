import styles from "./EntreeList.module.css";

export default function EntreeList({ foodTruck }) {
    const menu = foodTruck.menu;
    
    return (
        <div className={styles.EntreeList}>
            <div>
                <ul>
                    <li className={styles.entreeList}>
                        {
                            menu ?
                            menu.entrees.map((entree, idx) => {
                                return (
                                    <div key={idx}>
                                        <p>{entree.description}</p>
                                        <p>${entree.price}</p>
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