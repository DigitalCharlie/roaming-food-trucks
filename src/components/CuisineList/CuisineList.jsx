import { useSearchParams } from "react-router-dom";
import styles from "./Cuisine.module.css"

export default function CuisineList({ handleCuisineChange }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const allCuisines = ["american", "asian-fusion", "chinese", "cuban", "ethiopian", "filipino", "french", "greek", "haitian", "indian", "japanese", "korean", "mediteranean", "mexican", "nigerian", "polish", "tex-mex", "thai", "vietnamese"];
    return (
        <div className={styles.Cuisines}>
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