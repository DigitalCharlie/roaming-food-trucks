import styles from './ResultList.module.css'


export default function ({resultTruck, starRate, priceRate, cuisine}) {
    return (
        <div>
            {
                resultTruck.map((truck) => {
                    return (
                        // if star rating was clicked
                        starRate !== 0 ?
                            // if star rating on filter matches or is less than the truck's current rating
                            starRate <= truck.currentRating ?
                                <div key={truck._id} onClick={() => { addFavorites(truck._id) }} /*onClick={() => { navigate(`${truck._id}`) }}*/ >
                                    <img src={truck.img} height='250' width='300' />
                                    <div className={styles.Banner}>
                                        <div className={styles.BannerTitle}>
                                            <h5>{truck.truckName}</h5>
                                            <p>{truck.currentRating ? truck.currentRating.toFixed(1) : null}</p>
                                        </div>
                                        <p>Wait time</p>
                                        <p>{truck.location.street}, {truck.location.city} </p>
                                    </div>
                                </div> 
                            :
                        null :
                        //if price was clicked
                        priceRate !== 0 ?
                            // price rating on filter matches or is less than the truck's current price rating
                            priceRate <= truck.priceRating ?
                                    <div key={truck._id} onClick={() => { addFavorites(truck._id) }} /*onClick={() => { navigate(`${truck._id}`) }}*/ >
                                        <img src={truck.img} height='250' width='300' />
                                        <div className={styles.Banner}>
                                            <div className={styles.BannerTitle}>
                                                <h5>{truck.truckName}</h5>
                                                <p>{truck.currentRating ? truck.currentRating.toFixed(1) : null}</p>
                                            </div>
                                            <p>Wait time</p>
                                            <p>{truck.location.street}, {truck.location.city} </p>
                                        </div>
                                    </div> 
                                :
                        null :
                        // if cuisine was clicked
                        cuisine !== 'null' ?
                            // cuisine hook matches cuisine type on page
                            cuisine == truck.cuisine ?
                                    <div key={truck._id} onClick={() => { addFavorites(truck._id) }} /*onClick={() => { navigate(`${truck._id}`) }}*/ >
                                        <img src={truck.img} height='250' width='300' />
                                        <div className={styles.Banner}>
                                            <div className={styles.BannerTitle}>
                                                <h5>{truck.truckName}</h5>
                                                <p>{truck.currentRating ? truck.currentRating.toFixed(1) : null}</p>
                                            </div>
                                            <p>Wait time</p>
                                            <p>{truck.location.street}, {truck.location.city} </p>
                                        </div>
                                    </div> 
                                :
                        null :
                        // If nothing was clicked
                        <div key={truck._id} onClick={() => { addFavorites(truck._id) }} /*onClick={() => { navigate(`${truck._id}`) }}*/ >
                            <img src={truck.img} height='250' width='300' />
                            <div className={styles.Banner}>
                                <div className={styles.BannerTitle}>
                                    <h5>{truck.truckName}</h5>
                                    <p>{truck.currentRating ? truck.currentRating.toFixed(1) : null}</p>
                                </div>
                                <p>Wait time</p>
                                <p>{truck.location.street}, {truck.location.city} </p>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}