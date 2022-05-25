
import styles from './TruckCards.module.css'
import StarDisplay from '../StarDisplay/StarDisplay'

export default function TruckCards({truckArray}) {
	return (
		<section className={styles.CardContainer}>
			{
				truckArray.map((truck) => (
					<article key={truck._id} className={styles.TruckCard}>
						<img src={truck.img} className={styles.TruckCardImage}/>
						<div className={styles.TruckBodyContent}>
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
						</div>
					</article>
				))
			}
		</section>
	)
}