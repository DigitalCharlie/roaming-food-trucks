import './App.css';
import HomePage from '../HomePage/HomePage';
import AuthPage from'../AuthPage/AuthPage'; 
import NavBar from '../../components/NavBar/NavBar';
import CreateReviewPage from '../CreateReviewPage/CreateReviewPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import FTDetailsPage from '../FTDetailsPage/FTDetailsPage';
import FTReviewsPage from '../FTReviewsPage/FTReviewsPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import {useState, useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import { getUser } from '../../utilities/users-service';

function App() {
  const location = useLocation(); 
  const [foodTrucks, setFoodTrucks] = useState([])
  const [user, setUser] = useState(getUser())

  useEffect(() => {
    (async () => {
      try {
        const data = await FoodtruckAPI.getAll()
        setFoodTrucks(data)
        console.log(location.pathname)
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <div className="App">
      <NavBar pathname={location.pathname} user={user} />
      <Routes>
        <Route path="/" element={<HomePage foodTrucks={foodTrucks} />} />
        <Route path="/signup" element={<AuthPage user={user} setUser={setUser} />} />
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
