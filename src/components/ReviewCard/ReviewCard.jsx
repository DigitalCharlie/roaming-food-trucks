// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import * as foodTruckAPI from "../../utilities/foodTruck-api";
import styles from "./ReviewCard.module.css";
import { Card, CardGroup } from "react-bootstrap";

export default function ReviewCard( {foodTruck} ) {
    return (
        <>
            <div className={styles.ReviewCard}>
                <div>
                    <h4>Reviews</h4>
                    {
                    foodTruck.reviews && foodTruck.reviews.length > 0 ?
                    foodTruck.reviews.map((review) => (
                        <Card className={styles.ReviewDescription}>
                           <Card.Body>
                               {review.review}
                            </Card.Body> 
                        </Card>  
                    ))
                    :
                    `${foodTruck.foodTruckName} has no reviews. be the first to review it!`
                    }
                </div> 
            </div>
        </>
    );
};