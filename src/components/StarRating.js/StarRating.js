import {useState, useEffect} from 'react'
import styles from './StarRating.module.css'

export default function StarRating({starRate, setStarRate}) {
    //Resetes the useEffect to show CSS change
    const [starRfsh, setStarRfsh] = useState(false)
    // these hooks  will change css of the star
    const [clicked, setClicked] = useState(false)
    const [index, setIndex] = useState(5)
    const [color, setColor] = useState('grey')

    useEffect(() => {
        if(clicked){
            setColor('#F2782F')
            setStarRate(index + 1)
        } else {
            setColor('grey')
            setStarRate(0)
        }
    }, [starRfsh])
    return(
        <div className={styles.StarRating}>
            <div>
                <h5>Rating</h5>
                <button onClick={() => {setIndex(-1); setStarRate(0)} } className={styles.clearButton}>Clear</button>
            </div>
            {
                [...Array(5)].map((star, idx) => {
                    return(
                        //On Click function will change the color of the individual star in the array and any star before it, if the star clicked happens to be the first one, then it will check if clicked is true and if it is it will change it to false (changing the color)
                        <button style={idx <= index ? {color: `${color}`} : {color: 'grey'}} onClick={() => {{index >= idx && !clicked ? setIndex(idx) || setClicked(!clicked) : index === 0 && clicked ? setClicked(!clicked) : setIndex(idx)} setStarRfsh(!starRfsh)} }><span>&#9733;</span></button>
                        
                    )
                })
            }
        </div>
    )
}