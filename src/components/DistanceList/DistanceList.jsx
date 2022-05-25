import styles from './DistanceList.module.css'
export default function DistanceList({handleRadiusChange, newRadius}) {

    return(
        <div className={styles.Distance}>
            <h5>Distance</h5>
                <label className={styles.DistanceLabel}>
                    <input type='checkbox' id='near' onClick={() => {handleRadiusChange(1, 'near')}} checked={newRadius === 1 ? true : false}>
                    </input> Near by (&lt; 1 mile)
                </label>
                <br />
                <label className={styles.DistanceLabel}>
                    <input type='checkbox' id='walk' onClick={() => {handleRadiusChange(2, 'walk')}} checked={newRadius===2 ? true : false}></input> Walking (2 miles)
                </label>
                <br />
                <label className={styles.DistanceLabel}>
                    <input type='checkbox' id='drive' onClick={() => {handleRadiusChange(5, 'drive')}} checked={newRadius === 5 ? true : false}></input> Driving (5 miles)
                </label>
        </div>
    )
}