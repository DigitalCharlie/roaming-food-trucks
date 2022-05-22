import styles from './CuisineList.module.css'

export default function CuisineList({ cuisine, setCuisine }) {

    const checkboxCuisine = (index) => {
        const input = document.getElementById(cuisines[index])
        if(input && input.checked){
            // only one checkbox can be checked
            for(let i = 0; i < cuisines.length; i++){
                document.getElementById(cuisines[i]).checked = false
            }
            input.checked = true
        } else if(input && !input.checked) {
            setCuisine('')
        }
    }

    const cuisines = ["american", "asian-fusion", "chinese", "cuban", "ethiopian", "filipino", "french", "greek", "haitian", "indian", "japanese", "korean", "mediteranean", "mexican", "nigerian", "polish", "tex-mex", "thai", "vietnamese"];
    return (
        <div className={styles.Cuisines}>
            {
                cuisines.map((element, idx) => {
                    return (
                        <div key={idx}>
                            <input onClick={() => {checkboxCuisine(idx)}} name={element} type="checkbox" id={element} /> {element}
                        </div>
                    )
                })
            }
        </div>
    )
};