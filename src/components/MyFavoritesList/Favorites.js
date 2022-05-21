import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as userApi from '../../utilities/users-api'
export default function Favorites({ user }) {
    let { userid } = useParams()
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        (async () => {
            try {
                console.log(userid)
                const response = await userApi.getUserFavorites(userid)
                setFavorites(response)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    // console.log(favorites)
    console.log(user)
    return (
        <div>
            <h1>My Favorites</h1>
            <div className='favorites'>
                {
                    favorites.map((favorite) => (
                        <div key={favorite._id} className='cartItem'>
                            <img src={favorite.img} />
                            <p>{favorite.foodTruckName}</p>
                            <p>{favorite.description}</p>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}