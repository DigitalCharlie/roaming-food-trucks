export default function CuisineList({ cuisine, setCuisine }) {
    const cuisines = ["american", "asian-fusion", "chinese", "cuban", "ethiopian", "filipino", "french", "greek", "haitian", "indian", "japanese", "korean", "mediteranean", "mexican", "nigerian", "polish", "tex-mex", "vietnamese"];
    return (
        <div>
            {
                cuisines.map((element, idx) => {
                    return (
                        <div key={idx}>
                            <input onClick={() => {
                                setCuisine(element)
                            }} name={element} type="checkbox" />
                            {element}
                        </div>
                    )
                })
            }
        </div>
    )
};