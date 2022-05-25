import { useEffect } from "react";
import styles from "./Cuisine.module.css"

export default function CuisineList({ handleCuisineChange, setCuisines, cuisines }) {
    useEffect(() => {
        if(cuisines.length === 0){
            for(let i = 0; i < allCuisines.length; i++){
                (document.getElementById(allCuisines[i]).checked = false)
            }
        }
    }, [cuisines])
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
                                    id={element}                                 
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