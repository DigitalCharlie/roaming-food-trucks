// DEPENDNCY
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

// STYLES
import styles from './StarDisplay.module.css'

export default function StarDisplay ({ foodTruck, review, options }) {

	const [rating, setRating] = useState(0)
	const [loaded, setLoaded] = useState(null)

	useEffect(() => {
        if(foodTruck) setRating(foodTruck.currentRating)
		if(review) setRating(review.rating)
		setLoaded(true)
    }, [foodTruck])

	const starRating = {
		value: rating,
		isHalf:true,
		edit: false,
		activeColor:'#F2782F'
	}

	const oneStar = {
		count:1, 
		value:1
	}

	return (
		<>
		{
			loaded && rating &&
			<div className={styles.starWrapper}>
				{options.displayNumber && <span className={styles.starNumber}>{rating.toFixed(1)}</span>}
				{
					options.singleStar 
					? <ReactStars {...oneStar} />
					: <ReactStars {...starRating} /> 
				}
		</div>
		}
		</>
	)
}