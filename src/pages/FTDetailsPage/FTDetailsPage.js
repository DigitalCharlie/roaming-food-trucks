// DEPENDENCIES
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as foodTruckAPI from "../../utilities/foodTruck-api";
import styles from "./FTDetailsPage.module.css";
import UserContext from '../../context/UserContext'

// COMPONENTS
import MenuList from "../../components/MenuList/MenuList";
import BusinessInfo from "../../components/BusinessInfo/BusinessInfo";
import SingleTruckMap from "../../components/SingleTruckMap/SingleTruckMap";

export default function FTDetailsPage() {
    const [foodTruck, setFoodTruck] = useState({});
    const [loaded, setLoaded] = useState({});

    const { id } = useParams();
    const userContext = useContext(UserContext);

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
            {/* {"Rating Component"} */}<h6>Rating</h6>
            {/* {"Reviews Button"} */}<h6>Reviews</h6>
            <div>
                <img src={foodTruck.img} alt="foodtruckimage" className={styles.foodTruckImage}></img>
            </div>
            <div className={styles.foodTruckDescription}>
                <div className={styles.foodTruckAbout}>
                  <h5>About</h5>
                  <p>{foodTruck.description}</p>
                </div>
            </div>
            <SingleTruckMap foodTruck={foodTruck} />
            <BusinessInfo foodTruck={foodTruck} />
            <MenuList foodTruck={foodTruck} className={styles.menuList}/>
        </div>
        }
      </main>
    );
};