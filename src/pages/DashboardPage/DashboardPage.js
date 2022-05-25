import Favorites from "../../components/MyFavoritesList/Favorites";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as userApi from '../../utilities/users-api'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Recents from "../../components/Recents/Recent";


// COMPONENTS
import UserContext from '../../context/UserContext'
import styles from './DashboardPage.module.css'
import TruckCards from '../../components/TruckCards/TruckCards'

export default function DashboardPage() {

    const [activeTab, setActiveTab] = useState('favorites')
    const [favorites, setFavorites] = useState([])
    const [recents, setRecents] = useState([])
    const [reviews, setReviews] = useState([])

	const userContext = useContext(UserContext);
	const user = userContext.user

    console.log(user.favorites)

    useEffect(() => {
        (async () => {
            try {
                const populatedUser = await userApi.getUserFavorites(user._id)
                setFavorites(populatedUser.favorites)
                setRecents(populatedUser.recents)
                setReviews(populatedUser.reviews)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <main>
            <div className={styles.MenuNav}>
                <div onClick={()=>setActiveTab('favorites')} className={`${styles.MenuNavOption} ${activeTab==='favorites' && styles.ActiveMenu }`}>Favorites</div>
                <div onClick={()=>setActiveTab('recents')} className={`${styles.MenuNavOption} ${activeTab==='recents' && styles.ActiveMenu }`}>Recents</div>
                <div onClick={()=>setActiveTab('reviews')} className={`${styles.MenuNavOption} ${activeTab==='reviews' && styles.ActiveMenu }`}>Reviews</div>
            </div>
            {
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

    // let { userid } = useParams()
    // const [favorites, setFavorites] = useState([])


    

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             console.log(userid)
    //             const response = await userApi.getUserFavorites(user._id)
    //             setFavorites(response.favorites)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     })()
    // }, [])
    // console.log(user)
    // return (
    //     <div>
    //         <h1>This is the Dashboard Page</h1>
    //         <Tabs defaultActiveKey="apps" className="mb-3">
    //             <Tab eventKey="favorites" title="Favorites">
    //                 <Favorites user={user} foodTrucks={foodTrucks} favorites={favorites} setFavorites={setFavorites} />
    //             </Tab>
    //             <Tab eventKey="recents" title="Recents">
    //                 <Recents />
    //             </Tab>
    //             <Tab eventKey="reviews" title="Reviews">
    //                 <Favorites user={user} foodTrucks={foodTrucks} favorites={favorites} setFavorites={setFavorites} />
    //             </Tab>
    //         </Tabs>

    //     </div>
    // );
};




