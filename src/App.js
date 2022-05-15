import './App.css';
import HomePage from './pages/HomePage';
import * as FooftruckAPI from './utilities/foodTruck-api'
import {useState, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

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
    <main className="App">
      <Routes>
        <Route path='/theroamingspoon' element={<HomePage foodTrucks={foodTrucks} />} />
        <Route path='/*' element={<Navigate to='theroamingspoon' />} />
      </Routes>
    </main>
  );
}

export default App;
