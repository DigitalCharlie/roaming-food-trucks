import styles from "./Cuisine.module.css"

export default function CuisineList({ handleCuisineChange, setCuisines }) {
    const allCuisines = ["american", "asian-fusion", "chinese", "cuban", "ethiopian", "filipino", "french", "greek", "haitian", "indian", "japanese", "korean", "mediteranean", "mexican", "nigerian", "polish", "tex-mex", "thai", "vietnamese"];
    return (
        <div className={styles.Cuisines}>
            <div>
                <h5>Cuisines</h5>
                <button onClick={() => setCuisines([])} >Clear</button>
            </div>
            {
                allCuisines.map((element, idx) => {
                    return (
                        <div key={idx}>
                            <label className={styles.cuisineLabel}>
                                <input 
                                    onClick={() => {
                                        handleCuisineChange(element)
                                    }} 
                                    name={element} 
                                    type="checkbox"                                 
                                />
                                {element}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
};