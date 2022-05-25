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
  const [user, setUser] = useState(getUser())

  function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

  useScrollToTop();

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <NavBar pathname={location.pathname} user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage  user={user} />} />
          <Route path="/signup" element={<AuthPage user={user} setUser={setUser} />} />
          <Route path="/login" element={<LogInPage setUser={setUser} />} />
          {
            user ?
              <Route path="/user" element={<DashboardPage user={user} />} />
              :
              <Route path="/user" element={<AuthPage user={user} setUser={setUser} />} />
          }
          <Route path="/foodtruck/resultspage" element={<ResultsPage  />} />
          <Route path="/foodtruck/detailpage/:id" element={<FTDetailsPage  />} />
          <Route path="/foodtruck/reviews/:id" element={<FTReviewsPage  />} />
          <Route path="/foodtruck/writereview/:id" element={<CreateReviewPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
