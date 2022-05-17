import {useState} from 'react'

export default function StarRating() {
    // the clickd and index hook will change css of the spcecific star
    const [clicked, ,setClicked] = useState(false)
    const [index, setIndex] = useState(5)
    return(
        <div>
            {
                [...Array(5)].map((star, idx) => {
                    return(
                        <button style={clicked && idx === index ? {color: '000'} : {color: 'ccc'}} onClick={() => {setClicked(!clicked); setIndex(idx)} }><span>&#9733;</span></button>
                        
                    )
                })
            }
        </div>
    )
}