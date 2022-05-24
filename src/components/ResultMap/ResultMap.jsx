import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

export default function MyComponent({resultTruck}) {
	
	const [loaded, setLoaded] = useState(null)
	const [selectedElement, setSelectedElement] = useState(null);
	const [showInfoWindow, setInfoWindow] = useState(true)

	const [center, setCenter] = useState({
		lat: -3.745,
		lng: -38.523
	})

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


	const mapMarkers = resultTruck.map((truck) => (
		<Marker
			key={truck._id}
			position={{
				lng:truck.location.geoLocation.coordinates[0],
				lat:truck.location.geoLocation.coordinates[1]
			}}
			icon={"/assets/tiny_truck.png"}
			title={truck.foodTruckName}
			onClick={(props, marker) => {
                setSelectedElement(truck);
			}}
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
		{selectedElement ? (
          <InfoWindow
            visible={showInfoWindow}
            position={{
				lat: selectedElement.location.geoLocation.coordinates[1],
				lng: selectedElement.location.geoLocation.coordinates[0]
			}}
            onCloseClick={() => {
              setSelectedElement(null);
            }}
			options={{ pixelOffset: new window.google.maps.Size(-2, -20) }}
          >
            <div>
              <h1>{selectedElement.foodTruckName}</h1>
            </div>
          </InfoWindow>
        ) : null
		}
		</GoogleMap>
		</LoadScript>
	)
}
