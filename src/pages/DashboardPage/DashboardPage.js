import Favorites from "../../components/MyFavoritesList/Favorites";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import * as userApi from '../../utilities/users-api'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Recents from "../../components/Recents/Recent";
export default function DashboardPage({ foodTrucks, user }) {
    let { userid } = useParams()
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        (async () => {
            try {
                console.log(userid)
                const response = await userApi.getUserFavorites(user._id)
                setFavorites(response.favorites)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    console.log(user)
    return (
        <div>
            <h1>This is the Dashboard Page</h1>
            <Tabs defaultActiveKey="apps" className="mb-3">
                <Tab eventKey="favorites" title="Favorites">
                    <Favorites user={user} foodTrucks={foodTrucks} favorites={favorites} setFavorites={setFavorites} />
                </Tab>
                <Tab eventKey="recents" title="Recents">
                    <Recents />
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <Favorites user={user} foodTrucks={foodTrucks} favorites={favorites} setFavorites={setFavorites} />
                </Tab>
            </Tabs>

        </div>
    );
};




