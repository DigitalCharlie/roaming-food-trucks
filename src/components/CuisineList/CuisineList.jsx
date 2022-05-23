import styles from './CuisineList.module.css'

export default function CuisineList({ cuisine, setCuisine, cuisineURL }) {

    const checkboxCuisine = (index) => {
        console.log(cuisine)
        // this will be falsy statment if a checkbox isn't pressed because index doesn't have any value without the onClick
        const input = document.getElementById(cuisines[index])
        // first check if the cuisine querry is empty, if it isn't then check the box equivalent to that cuisine
        if(cuisineURL == 'null') {
            // if query is null then check if the input variable returns an element and if it is checked or not
            if(input && input.checked){
                // only one checkbox can be checked
                for(let i = 0; i < cuisines.length; i++){
                    document.getElementById(cuisines[i]).checked = false
                }
                input.checked = true
                setCuisine(cuisines[index])
            } else if(input && !input.checked) {
                setCuisine('null')
            } 
        } else {
            index = cuisines.findIndex(cuisine => cuisine == cuisineURL)
            console.log(`new index is ${index}`)
            input.checked = true
            if(input && input.checked){
                // only one checkbox can be checked
                for(let i = 0; i < cuisines.length; i++){
                    document.getElementById(cuisines[i]).checked = false
                }
                input.checked = true
                setCuisine(cuisines[index])
            } else if(input && !input.checked) {
                setCuisine('null')
            } 
        }
    }

    const cuisines = ["american", "asian-fusion", "chinese", "cuban", "ethiopian", "filipino", "french", "greek", "haitian", "indian", "japanese", "korean", "mediteranean", "mexican", "nigerian", "polish", "tex-mex", "thai", "vietnamese"];
    return (
        <div className={styles.Cuisines}>
            {
                cuisines.map((element, idx) => {
                    return (
                        <div key={idx}>
                            <input onClick={() => {checkboxCuisine(idx)}} name={element} type="checkbox" id={element} /> <p>{element}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};