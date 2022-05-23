export default function CuisineList({ cuisines, setCuisines, handleCuisineChange }) {
    const allCuisines = ["american", "asian-fusion", "chinese", "cuban", "ethiopian", "filipino", "french", "greek", "haitian", "indian", "japanese", "korean", "mediteranean", "mexican", "nigerian", "polish", "tex-mex", "vietnamese", "thai"];
    return (
        <div className={styles.Cuisines}>
            {
                allCuisines.map((element, idx) => {
                    return (
                        <div key={idx}>
                            <input onClick={() => {
                                handleCuisineChange(element)
                            }} name={element} type="checkbox" />
                            {element}
                        </div>
                    )
                })
            }
        </div>
    )
};