// DEPENDNCIES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


import styles from './TruckCards.module.css'
import StarDisplay from '../StarDisplay/StarDisplay'
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon"

export default function TruckCards({truckArray}) {

	const navigate = useNavigate()

	return (
		<section className={styles.CardContainer}>
			{
				truckArray.map((truck) => (
					<article key={truck._id} className={styles.TruckCard}>
						<div className={styles.FavoriteHeart}>
							<FavoritesIcon truck={truck} circle={true} />
						</div>
						<img src={truck.img} className={styles.TruckCardImage} onClick={() => navigate(`/foodtruck/detailpage/${truck._id}`)}/>
						<div className={styles.TruckBodyContent} onClick={() => navigate(`/foodtruck/detailpage/${truck._id}`)}>
							<div className={styles.TruckTopline}>
								<p className="heavy">{truck.foodTruckName}</p>
								<p>
									{
										truck.currentRating && 
										<StarDisplay 
											foodTruck={truck} 
											options={{edit:false, displayNumber:true, singleStar:true}}
										/>
									}
								</p>
							</div>
							<div className={styles.TruckAddress}>
								<FontAwesomeIcon className={styles.Icon} icon="fa-solid fa-utensils" /> 
								<div>
									{truck.cuisine}
								</div>
							</div>
							<div className={styles.TruckAddress}>
								<FontAwesomeIcon className={styles.Icon} icon="fa-solid fa-location-arrow" /> 
								<div>
									{truck.location.street}<br />
									{truck.location.city}, {truck.location.state} {truck.location.zipCode}
								</div>
							</div>
						</div>
					</article>
				))
			}
		</section>
	)
}