import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as foodTruckAPI from "../../utilities/foodTruck-api";
import styles from "./FTReviewsPage.module.css"

export default function FTReviewsPage() {
    const { id } = useParams();
    const [foodTruck, setFoodTruck] = useState({});

    useEffect(() => {
        (async () => {
          try {
            const data = await foodTruckAPI.getById(id)
            setFoodTruck(data)
          } catch(e) {
            console.log(e)
          }
          console.log(id)
        })()
    }, [])
    
    return (
        <>
            <div className={styles.FTReviewsPage}>
               <h1>{foodTruck.foodTruckName}</h1>
                <Link to={`/foodtruck/review/create/${id}`}>Write a Review</Link>
                <div>
                {
                foodTruck.reviews && foodTruck.reviews.length > 0 ?
                foodTruck.reviews.map((review) => (
                    review.review
                ))
                :
                `${foodTruck.foodTruckName} has no reviews. be the first to review it!`
                }
                </div> 
            </div>
        </>
    );
};