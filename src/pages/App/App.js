// DEPENDNCIES
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';

// PAGES AND COMPONENTS
import './App.css';
import HomePage from '../HomePage/HomePage';
import LogInPage from '../LogInPage/LogInPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import CreateReviewPage from '../CreateReviewPage/CreateReviewPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import FTDetailsPage from '../FTDetailsPage/FTDetailsPage';
import FTReviewsPage from '../FTReviewsPage/FTReviewsPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import Footer from '../../components/Footer/Footer';
import UserContext from '../../context/UserContext'

function App() {
  const location = useLocation();
  const [foodTrucks, setFoodTrucks] = useState([])
  const [user, setUser] = useState(getUser())

  useEffect(() => {
    (async () => {
      try {
        const data = await FoodtruckAPI.getAll() // THIS WILL NEED TO CHANGE TO NOT BE EVERY ROUTE IN THE DB BUT IS LOW PRIORITY
        setFoodTrucks(data)
        console.log(location.pathname)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <NavBar pathname={location.pathname} user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage foodTrucks={foodTrucks} user={user} />} />
          <Route path="/signup" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
          {
            user ?
              <Route path="/user" element={<DashboardPage foodTrucks={foodTrucks} user={user} />} />
              :
              <Route path="/user" element={<AuthPage user={user} setUser={setUser} />} />
          }
          <Route path="/foodtruck/resultspage" element={<ResultsPage foodTrucks={foodTrucks} />} />
          <Route path="/foodtruck/detailpage/:id" element={<FTDetailsPage foodTrucks={foodTrucks} />} />
          <Route path="/foodtruck/reviews/:id" element={<FTReviewsPage foodTrucks={foodTrucks} />} />
          <Route path="/foodtruck/review/create/:id" element={<CreateReviewPage foodTrucks={foodTrucks} />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
