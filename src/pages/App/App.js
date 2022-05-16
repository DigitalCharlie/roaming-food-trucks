import './App.css';
import HomePage from '../HomePage/Homepage';
import * as FooftruckAPI from '../../utilities/foodTruck-api'
import {useState, useEffect} from 'react'

function App() {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await FooftruckAPI.getAll()
        setFoodTrucks(data)
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <div className="App">
   <HomePage foodTrucks={foodTrucks} />
    </div>
  );
}

export default App;
