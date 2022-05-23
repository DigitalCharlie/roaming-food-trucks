import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

export default function MyComponent({resultTruck}) {

	const [center, setCenter] = useState({
		lat: -3.745,
		lng: -38.523
	})
	const [loaded, setLoaded] = useState(null)

	const containerStyle = {
		width: '400px',
		height: '400px'
	};

	useEffect(() => {
		console.log(resultTruck[0])
		if(resultTruck.length){
			let loadingCenter = {
				lng: resultTruck[0].location.geoLocation.coordinates[0],
				lat: resultTruck[0].location.geoLocation.coordinates[1]
			}
			setCenter(loadingCenter)
			setLoaded(true)
		} else {
			setLoaded(true)
		}
	  }, [])

	const markers = [
		{lng: -73.9929658, lat: 40.73763599999999}
	]

	return (
		<LoadScript
		googleMapsApiKey={process.env.REACT_APP_MAPS_KEY}
		>
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
		>
			<Marker
				position={markers[0]}
			/>
			<Marker
				position={{lat:0,lng:0}}
			/>
		</GoogleMap>
		</LoadScript>
	)
	}
