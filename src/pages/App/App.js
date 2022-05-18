import './App.css';
import HomePage from '../HomePage/HomePage';
import CreateReviewPage from '../CreateReviewPage/CreateReviewPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import FTDetailsPage from '../FTDetailsPage/FTDetailsPage';
import FTReviewsPage from '../FTReviewsPage/FTReviewsPage';
import ResultsPage from '../ResultsPage/ResultsPage';
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
        <Route path="/user/dashboard/:userid" element={<DashboardPage foodTrucks={foodTrucks} />} />
        <Route path="/foodtruck/resultspage" element={<ResultsPage foodTrucks={foodTrucks} />} />
        <Route path="/foodtruck/detailpage/:foodtruckid" element={<FTDetailsPage foodTrucks={foodTrucks} />} />
        <Route path="/foodtruck/reviews/:foodtruckid" element={<FTReviewsPage foodTrucks={foodTrucks} />} />
        <Route path="/foodtruck/review/create" element={<CreateReviewPage foodTrucks={foodTrucks} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
