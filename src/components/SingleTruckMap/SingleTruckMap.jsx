import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../ResultMap/ResultMap.module.css'

export default function SingleTruckMap ({foodTruck}) {
	
	const [selectedTruck, setSelectedTruck] = useState(null);
	const [center, setCenter] = useState({
		lat: -3.745,
		lng: -38.523
	})

	const containerStyle = {
		width: '500px',
		height: '500px'
	};

	useEffect(() => {
		let loadingCenter = {
			lng: foodTruck.location.geoLocation.coordinates[0],
			lat: foodTruck.location.geoLocation.coordinates[1]
		}
		setCenter(loadingCenter)
	  }, [])

	return (
		<LoadScript
		googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}
		>

		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={12}
		>
		<Marker
			key={foodTruck._id}
			position={{
				lng:foodTruck.location.geoLocation.coordinates[0],
				lat:foodTruck.location.geoLocation.coordinates[1]
			}}
			icon={"/assets/tiny_truck.png"}
			title={foodTruck.foodTruckName}
			onClick={(props, marker) => {
                setSelectedTruck(foodTruck);
			}}
			animation={
				selectedTruck && selectedTruck._id === foodTruck._id ? window.google.maps.Animation.BOUNCE : null
			}

		/>
		{
			selectedTruck ? (
				<InfoWindow
					position={{
						lat: selectedTruck.location.geoLocation.coordinates[1],
						lng: selectedTruck.location.geoLocation.coordinates[0]
					}}
					onCloseClick={() => {
						setSelectedTruck(null);
					}}
					options={{ 
						pixelOffset: new window.google.maps.Size(-2, -30) 
					}}
				>
					<div>
						<h4 className={styles.infoWindowTitle}>{selectedTruck.foodTruckName}</h4>
						<p className={styles.address}>{selectedTruck.location.street}, {selectedTruck.location.city}, {selectedTruck.location.state}</p>
						<hr className={styles.rule} />
						<p>{selectedTruck.description}</p>
					</div>
				</InfoWindow>
			) : null
		}
		</GoogleMap>
		</LoadScript>
	)
}
