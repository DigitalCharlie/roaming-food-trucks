import { useEffect } from "react"
import styles from './DistanceList.module.css'
export default function DistanceList({handleRadiusChange, newRadius}) {
useEffect(() => {
    let nearInput = document.getElementById('near')
    let walkInput = document.getElementById('walk')
    let driveInput = document.getElementById('drive')
    if(newRadius == 5) {driveInput.checked = true; nearInput.checked = false; walkInput.checked = false}
    if(newRadius == 1) {walkInput.checked = true; nearInput.checked = false; driveInput.checked = false}
    if(newRadius == 0.5) {nearInput.checked = true; driveInput.checked = false; walkInput.checked = false}
})

    return(
        <div className={styles.Distance}>
            <h5>Distance</h5>
                <label className={styles.DistanceLabel}><input type='checkbox' id='near' onClick={() => {handleRadiusChange(0.5, 'near')}}></input> Walking (&lt; 1 mile)</label>
                <label className={styles.DistanceLabel}><input type='checkbox' id='walk' onClick={() => {handleRadiusChange(1, 'walk')}}></input> Walking (1 mile)</label>
                <label className={styles.DistanceLabel}><input type='checkbox' id='drive' onClick={() => {handleRadiusChange(5, 'drive')}}></input> Driving (5 miles)</label>
        </div>
    )
}