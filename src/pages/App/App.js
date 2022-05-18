import './App.css';
import HomePage from '../HomePage/HomePage';
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Footer from '../../components/Footer/Footer';

function App() {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await FoodtruckAPI.getAll()
        setFoodTrucks(data)
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage foodTrucks={foodTrucks} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
