// DEPENDENCIES
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as foodTruckAPI from "../../utilities/foodTruck-api";
import * as usersAPI from "../../utilities/users-api";
import styles from "./FTDetailsPage.module.css";
import UserContext from '../../context/UserContext'


// COMPONENTS
import MenuList from "../../components/MenuList/MenuList";
import BusinessInfo from "../../components/BusinessInfo/BusinessInfo";
import StarDisplay from "../../components/StarDisplay/StarDisplay";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import FavoritesIcon from "../../components/FavoritesIcon/FavoritesIcon";

export default function FTDetailsPage() {
    const [foodTruck, setFoodTruck] = useState({});
    const [loaded, setLoaded] = useState({});

    const { id } = useParams();
    const userContext = useContext(UserContext);
    const user = userContext.user

    const Navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
          try {
            const data = await foodTruckAPI.getById(id)
            setFoodTruck(data)
            if (user._id) {
              const updatedUser = await usersAPI.newRecent(user._id, {truck: id})
            }
            setLoaded(true)
          } catch(e) {
            console.log(e)
          }
        })()
    }, [])
    
    return (
      <main>
        {
          loaded &&
          <div className={styles.FTDetailsPage}>
            <div className={styles.ToplineTitle}>
              <h1 className={styles.TruckName}>{foodTruck.foodTruckName}</h1>
              <FavoritesIcon truck={foodTruck} />
            </div>
            <p className={styles.GrayText}>{foodTruck.cuisine}</p>
            {
              foodTruck.currentRating ?
              <StarDisplay foodTruck={foodTruck} options={{edit:false, displayNumber:true}} />
              :
              "No reviews yet"
            }
            <div>
                <img src={foodTruck.img} alt="foodtruckimage" className={styles.foodTruckImage}></img>
            </div>
            <div className={styles.foodTruckDescription}>
              <h4 className="heavy">About</h4>
              <p>{foodTruck.description}</p>
            </div>
            {
              foodTruck.location &&
              <>
                <BusinessInfo foodTruck={foodTruck} />
                <MenuList foodTruck={foodTruck} className={styles.menuList}/>
                <ReviewCard foodTruck={foodTruck}/>
                <div className={styles.Right}><Link to={`/foodtruck/writereview/${foodTruck._id}`}><button className={styles.ReviewButton}>Write Review</button></Link></div>
              </>
            }
        </div>
        }
      </main>
    );
};