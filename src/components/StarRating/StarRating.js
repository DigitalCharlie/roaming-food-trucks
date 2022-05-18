import {useState, useEffect} from 'react'

export default function StarRating() {
    //Resetes the useEffect to show CSS change
    const [starRfsh, setStarRfsh] = useState(false)
    // these hooks  will change css of the spcecific star
    const [clicked, setClicked] = useState(false)
    const [index, setIndex] = useState(5)
    const [color, setColor] = useState('blue')

    // onMouseEnter={() => {setClicked(!clicked); setIndex(idx); setRefresh(!refresh)}} onMouseLeave={() => { !clicked && setIndex(5); setRefresh(!refresh)}}

    useEffect(() => {
        if(clicked){
            setColor('red')
        } else {
            setColor('grey')
        }
    }, [starRfsh])
    return(
        <div>
            {
                [...Array(5)].map((star, idx) => {
                    return(
                        <button style={idx === index ? {color: `${color}`} : {color: 'grey'}} onClick={() => {setClicked(!clicked); setIndex(idx); setStarRfsh(!starRfsh)} }><span>&#9733;</span></button>
                        
                    )
                })
            }
        </div>
    )
}