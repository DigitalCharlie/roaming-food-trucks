import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as userApi from '../../utilities/users-api'
export default function Favorites({ user }) {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState('')
    useEffect(() => {
        (async () => {
            try {
                const response = await userApi.getUserFavorites(user._id)
                setFavorites(response)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    console.log(favorites)
    return (
        <div>
            <h1>My Favorites</h1>
            <div className='favorites'>
                {
                    favorites && favorites.foundUsers.shoppingCart.map((favorite) => (
                        <div className='cartItem'>
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