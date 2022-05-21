import MenuList from "../../components/MenuList/MenuList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as FoodtruckAPI from "../../utilities/foodTruck-api";
import styles from "./FTDetailsPage.module.css";

export default function FTDetailsPage() {
    const { id } = useParams();
    const [foodTruck, setFoodTruck] = useState({});
    
    useEffect(() => {
        (async () => {
          try {
            const data = await FoodtruckAPI.getById(id)
            setFoodTruck(data)
          } catch(e) {
            console.log(e)
          }
          console.log(id)
        })()
      }, [])
    
    return (
        <div className={styles.FTDetailsPage}>
            <h1>This is the Food Truck Details Page</h1>
            <h1>{foodTruck.foodTruckName}</h1>
            <h6>{foodTruck.cuisine}</h6>
            {/* {"Rating Component"} */}<h6>Rating</h6>
            {/* {"Reviews Button"} */}<h6>Reviews</h6>
            <div>
                <img src={foodTruck.img} className={styles.foodTruckImage}></img>
            </div>
            <div className={styles.foodTruckDescription}>
                <h5>About</h5>
                <p>{foodTruck.description}</p>
            </div>
            {/* {Business Info Component} */}<h6>Business Info</h6>
            <MenuList foodTruck={foodTruck}/>
        </div>
    );
};