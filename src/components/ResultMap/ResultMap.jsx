import { GoogleMap, LoadScript } from '@react-google-maps/api';
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
				lng: resultTruck[0].location.geoLocation[0],
				lat: resultTruck[0].location.geoLocation[1]
			}
			setCenter(loadingCenter)
			setLoaded(true)
		} else {
			setLoaded(true)
		}
	  }, [])

	console.log(center)

	return (
		<LoadScript
		googleMapsApiKey="MAP KEY"
		>
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
		>
			{ /* Child components, such as markers, info windows, etc. */ }
			<></>
		</GoogleMap>
		</LoadScript>
	)
	}