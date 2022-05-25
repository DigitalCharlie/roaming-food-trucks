// DEPENDNCIES
import * as usersAPI from '../../utilities/users-api'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import UserContext from '../../context/UserContext'
import styles from './FavoritesIcon.module.css'
import { Navigate } from 'react-router-dom'


export default function FavoritesIcon ({truck, circle}) {

	const userContext = useContext(UserContext);
	const user = userContext.user

	const navigate = useNavigate()

	const whichHeart = (truckId) => {
		if (!user) return "fa-regular fa-heart"
		if (!user.favorites.includes(truckId)) return "fa-regular fa-heart"
		return "fa-solid fa-heart"
    }

	const whichVersion = (truckId) => {
		if (!user) return styles.Empty
		if (!user.favorites.includes(truckId)) return styles.Empty
		return styles.Filled
    }

	const toggleFavorite = async (truckId) => {
        try {
			if(!user) navigate('/signup')
            const favoriteTruck = { truck: truckId }
            const editedUser = await usersAPI.toggleFavorite(user._id, favoriteTruck)
			userContext.setUser(editedUser)
        } catch (err) {
            console.log(err)
        }
    }

	return (
		<>
			{
				truck &&
				<FontAwesomeIcon 
					className={`${styles.Icon} ${whichVersion(truck._id)} ${circle && styles.Circle}`}  
					icon={whichHeart(truck._id)} 
					onClick={() => { toggleFavorite(truck._id) }} 
				/>
			}
		</>
	)
}