// DEPENDNCIES
import * as usersAPI from '../../utilities/users-api'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// COMPONENTS
import UserContext from '../../context/UserContext'
import styles from './FavoritesIcon.module.css'


export default function FavoritesIcon ({truck}) {

	const userContext = useContext(UserContext);
	const user = userContext.user

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
					className={`Icon ${whichVersion(truck._id)}`}  
					icon={whichHeart(truck._id)} 
					onClick={() => { toggleFavorite(truck._id) }} 
				/>
			}
		</>
	)
}