import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ResultMap.module.css'
import StarDisplay from '../StarDisplay/StarDisplay';

export default function ResultsMap({resultTruck, filteredList}) {
	
	const [loaded, setLoaded] = useState(null)
	const [selectedTruck, setSelectedTruck] = useState(null);

	const [center, setCenter] = useState({
		lat: -3.745,
		lng: -38.523
	})

	const containerStyle = {
		width: '100%',
		height: '550px',
	};

	useEffect(() => {
		if(filteredList.length){
			let loadingCenter = {
				lng: filteredList[0].location.geoLocation.coordinates[0],
				lat: filteredList[0].location.geoLocation.coordinates[1]
			}
			setCenter(loadingCenter)
			setLoaded(true)
		} else {
			setLoaded(true)
		}
	  }, [filteredList])


	const mapMarkers = filteredList.map((truck) => (
		<Marker
			key={truck._id}
			position={{
				lng:truck.location.geoLocation.coordinates[0],
				lat:truck.location.geoLocation.coordinates[1]
			}}
			icon={"/assets/tiny_truck.png"}
			title={truck.foodTruckName}
			onClick={(props, marker) => {
                setSelectedTruck(truck);
			}}
			animation={
				selectedTruck && selectedTruck._id === truck._id ? window.google.maps.Animation.BOUNCE : null
			}

		/>
	))

	return (
		<LoadScript
		googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}
		>
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={12}
		>
		{mapMarkers}
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
						<div className={styles.mapDetails}>
							<div>
								<h4 className={styles.infoWindowTitle}>{selectedTruck.foodTruckName}</h4>
								<p className={styles.address}>{selectedTruck.location.street}, {selectedTruck.location.city}, {selectedTruck.location.state}</p>
							</div>
							<StarDisplay foodTruck={selectedTruck} options={{displayNumber:false}} />
						</div>
						<hr className={styles.rule} />
						<p>{selectedTruck.description}</p>
						<Link to={`/foodtruck/detailpage/${selectedTruck._id}`}><button className={`button ${styles.button}`}>Explore the Menu</button></Link>
						{/* <img src={selectedTruck.img} className={styles.truckThumbnail} /> */}
					</div>
				</InfoWindow>
			) : null
		}
		</GoogleMap>
		</LoadScript>
	)
}
