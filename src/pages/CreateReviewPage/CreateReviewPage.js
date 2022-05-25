import * as reviewAPI from "../../utilities/reviews-api"
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as foodTruckAPI from "../../utilities/foodTruck-api";
import styles from "./CreateReviewPage.module.css";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { FormText } from "react-bootstrap";
import { Button } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import { FormSelect } from "react-bootstrap";

export default function CreateReviewPage() {
    const Navigate = useNavigate();
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const [foodTruck, setFoodTruck] = useState({});
    const [formData, setFormData] = useState({
        rating: "",
        review: "",
        waitTime: ""
    });
    
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

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    };

    const handleSubmit = async(evt) => {
        evt.preventDefault()
        try {
            formData.foodTruck = id
            // formData.user = userid need a way to access user id
            const createdReview = reviewAPI.createReview(formData)
            console.log(createdReview)
            Navigate(`/foodtruck/detailpage/${id}`)
        }   catch (err) {
            console.log(err)
        }
    };
    console.log(formData);

    return (
        <div className={styles.CreateReviewPage}>
            <div className={styles.reviewForm}>
                <h2>{foodTruck.foodTruckName}</h2>
                <Form onSubmit={handleSubmit} method="POST">
                    <FormGroup className="mb-3" controlId="reviewForm">
                        <div className={styles.reviewRating}>
                            <FormLabel>Select Your Rating</FormLabel>
                            <FormSelect onChange={handleChange} value={formData.rating} name="rating">
                                <option selected>Select Rating</option>
                                <option value="1">1 Star</option>
                                <option value="2">2 Star</option>
                                <option value="3">3 Star</option>
                                <option value="4">4 Star</option>
                                <option value="5">5 Star</option>
                            </FormSelect>
                        </div>
                        <div className={styles.minutesRange}>
                            <FormLabel>Minutes Waited</FormLabel>
                            <FormSelect onChange={handleChange} value={formData.waitTime} name="waitTime">
                                <option value="0">0 min</option>
                                <option value="5">5 min</option>
                                <option value="10">10 min</option>
                                <option value="15">15 min</option>
                                <option value="20">20+ min</option>
                            </FormSelect>
                        </div>
                        <FormLabel>Write a Review</FormLabel>
                        <FormControl as="textarea" rows={3} onChange={handleChange} value={formData.review} name="review"/>
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Post
                    </Button>
                </Form>
            </div>
        </div>
    );
};