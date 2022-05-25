import { useState, useContext, useEffect } from "react";
import * as userApi from '../../utilities/users-api'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

// COMPONENTS
import UserContext from '../../context/UserContext'
import styles from './DashboardPage.module.css'
import TruckCards from '../../components/TruckCards/TruckCards'
import StarDisplay from "../../components/StarDisplay/StarDisplay";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function DashboardPage() {

    const [loaded, setLoaded] = useState(null)
    const [activeTab, setActiveTab] = useState('favorites')
    const [favorites, setFavorites] = useState([])
    const [recents, setRecents] = useState([])
    const [reviews, setReviews] = useState([])

    const navigate = useNavigate()

	const userContext = useContext(UserContext);
	const user = userContext.user

    useEffect(() => {
        (async () => {
            try {
                const populatedUser = await userApi.getUserFavorites(user._id)
                setFavorites(populatedUser.favorites)
                setRecents(populatedUser.recents)
                setReviews(populatedUser.reviews)
                console.log(populatedUser)
                setLoaded(true)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [user])

    return (
        <main>
            <div className={styles.MenuNav}>
                <div onClick={()=>setActiveTab('favorites')} className={`${styles.MenuNavOption} ${activeTab==='favorites' && styles.ActiveMenu }`}>Favorites</div>
                <div onClick={()=>setActiveTab('recents')} className={`${styles.MenuNavOption} ${activeTab==='recents' && styles.ActiveMenu }`}>Recents</div>
                <div onClick={()=>setActiveTab('reviews')} className={`${styles.MenuNavOption} ${activeTab==='reviews' && styles.ActiveMenu }`}>Reviews</div>
            </div>
            {
                !loaded ?
                <div className='spinner-div'>
                    <Spinner animation="border" className='spinner'/>
                </div>
                :
                activeTab === 'favorites' 
                ?   <>
                        {
                            favorites.length > 0 ?
                            <TruckCards truckArray={favorites} />
                            :
                            <>
                                <h3 className="center">You haven't chosen any favorites yet.<br /> Find one to review!</h3>
                                <SearchBox notHomePage={true}/>
                            </>
                        }
                    </>
                : activeTab === 'recents'
                ?   <>
                        {
                            recents.length > 0 ?
                            <TruckCards truckArray={recents} />
                            :
                            <>
                                <h3 className="center">You haven't visited any truck pages yet.<br /> Find one to review!</h3>              
                                <SearchBox notHomePage={true} />
                            </>

                        }
                    </> 
                
                :   <>
                        {
                            reviews.length > 0 ?
                            <div className={styles.ReviewContainer}>
                                {   
                                    reviews.map((review) => (
                                        <div key={review._id} className={styles.ReviewCard} onClick={() => navigate(`/foodtruck/detailpage/${review.foodTruck._id}`)}>
                                            <p className={`heavy ${styles.ReviewedTruck}`}>{review.foodTruck.foodTruckName}</p>
                                            <StarDisplay review={review} options={{displayNumber:false}} />
                                            <br />
                                            <p>{review.review}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <>
                                <h3 className="center">You haven't reviewed any trucks yet.<br /> Find one to review!</h3>
                                <SearchBox notHomePage={true} />
                            </>
                        }
                    </> 
            }
        </main>
    )
};




