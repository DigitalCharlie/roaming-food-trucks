// DEPENDNCY
import ReactStars from "react-rating-stars-component";

// STYLES
import styles from './StarDisplay.module.css'

export default function StarDisplay ({ foodTruck, options }) {

	const starRating = {
		value: foodTruck.currentRating,
		isHalf:true,
		edit: options.edit || false,
	}

	const oneStar = {
		count:1, 
		value:1
	}

	return (
		<div className={styles.starWrapper}>
			{options.displayNumber && foodTruck.currentRating.toFixed(1)}
			{
				options.singleStar 
				? <ReactStars {...oneStar} />
				: <ReactStars {...starRating} /> 
			}
		</div>
	)
}