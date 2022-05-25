import { useState, useContext, useEffect } from "react";
import * as userApi from '../../utilities/users-api'
import Spinner from 'react-bootstrap/Spinner';


// COMPONENTS
import UserContext from '../../context/UserContext'
import styles from './DashboardPage.module.css'
import TruckCards from '../../components/TruckCards/TruckCards'

export default function DashboardPage() {

    const [loaded, setLoaded] = useState(null)
    const [activeTab, setActiveTab] = useState('favorites')
    const [favorites, setFavorites] = useState([])
    const [recents, setRecents] = useState([])
    const [reviews, setReviews] = useState([])

	const userContext = useContext(UserContext);
	const user = userContext.user

    useEffect(() => {
        (async () => {
            try {
                const populatedUser = await userApi.getUserFavorites(user._id)
                setFavorites(populatedUser.favorites)
                setRecents(populatedUser.recents)
                setReviews(populatedUser.reviews)
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
                            <h3>You haven't chosen any favorites yet.</h3>
                        }
                    </>
                : activeTab === 'recents'
                ?   <>
                        {
                            recents.length > 0 ?
                            <TruckCards truckArray={recents} />
                            :
                            <h3>You haven't visited any truck pages yet.</h3>
                        }
                    </> 
                
                :   <>
                        {
                            reviews.length > 0 ?
                            <h3>These are your reviews</h3>
                            :
                            <h3>You haven't reviewed any trucks yet.</h3>
                        }
                    </> 
            }
        </main>
    )
};




