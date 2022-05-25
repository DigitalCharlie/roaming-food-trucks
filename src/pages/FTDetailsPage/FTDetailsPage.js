// DEPENDENCIES
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as foodTruckAPI from "../../utilities/foodTruck-api";
import styles from "./FTDetailsPage.module.css";
import UserContext from '../../context/UserContext'

// COMPONENTS
import MenuList from "../../components/MenuList/MenuList";
import BusinessInfo from "../../components/BusinessInfo/BusinessInfo";
import StarDisplay from "../../components/StarDisplay/StarDisplay";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

export default function FTDetailsPage() {
    const [foodTruck, setFoodTruck] = useState({});
    const [loaded, setLoaded] = useState({});

    const { id } = useParams();
    const userContext = useContext(UserContext);

    const Navigate = useNavigate();

    console.log("Below is the user from UserContext")
    console.log(userContext)
    
    useEffect(() => {
        (async () => {
          try {
            const data = await foodTruckAPI.getById(id)
            setFoodTruck(data)
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
            {/* <h6>{foodTruck.location.city} {">"} {foodTruck.cuisine} {">"} {foodTruck.foodTruckName}</h6> */}
            <h1>{foodTruck.foodTruckName}</h1>
            <h6>{foodTruck.cuisine}</h6>
            <h6>Rating</h6>
            {
              foodTruck.currentRating ?
              <StarDisplay foodTruck={foodTruck} options={{edit:false, displayNumber:true}} />
              :
              "No reviews yet"
            }
            <Link to={`/foodtruck/reviews/${id}`}>Reviews</Link>
            <div>
                <img src={foodTruck.img} alt="foodtruckimage" className={styles.foodTruckImage}></img>
            </div>
            <div className={styles.foodTruckDescription}>
                <div className={styles.foodTruckAbout}>
                  <h5>About</h5>
                  <p>{foodTruck.description}</p>
                </div>
            </div>
            {
              foodTruck.location &&
              <>
                <BusinessInfo foodTruck={foodTruck} />
                <MenuList foodTruck={foodTruck} className={styles.menuList}/>
                <ReviewCard foodTruck={foodTruck} />
              </>
            }
        </div>
        }
      </main>
    );
};