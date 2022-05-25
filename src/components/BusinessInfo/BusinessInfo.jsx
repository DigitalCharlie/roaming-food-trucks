import styles from "./BusinessInfo.module.css";
import SingleTruckMap from "../SingleTruckMap/SingleTruckMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react";

export default function BusinessInfo({ foodTruck }) {

    const [day, setDay] = useState(null)

    useEffect(() => {
        const d = new Date()
        setDay(d.getDay())
    }, []);

    return (
        <>
        {    
            foodTruck.location &&
            <section className={styles.BusinessInfo}>
                <div className={styles.MapInfo}>
                    <SingleTruckMap foodTruck={foodTruck}/>
                </div>
                <div className={styles.BusinessDetails}>
                    <div className={styles.contactContainer}>
                        <FontAwesomeIcon className={styles.Icon} icon="fa-solid fa-location-arrow" /> 
                        <div>
                            {foodTruck.location.street}<br />
                            {foodTruck.location.city}, {foodTruck.location.state} {foodTruck.location.zipCode}
                        </div>
                    </div>
                    <div className={styles.contactContainer}>
                        <FontAwesomeIcon className={styles.Icon} icon="fa-solid fa-phone" /> 
                        {foodTruck.phone}
                    </div>
                    <div className={styles.contactContainer}>
                        <FontAwesomeIcon className={styles.Icon} icon="fa-solid fa-clock" />
                        Wait Time: 15 minutes
                    </div>
                    <ul className={styles.BusinessHours}>
                        <li className={day===1? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Mon</div> <div>11:00AM - 11:00PM</div>
                        </li>
                        <li className={day===2? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Tue</div> <div>11:00AM - 11:00PM</div>
                        </li>
                        <li className={day===3? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Wed</div> <div>11:00AM - 11:00PM</div>
                        </li>
                        <li className={day===4? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Thu</div> <div>11:00AM - 11:00PM</div>
                        </li>
                        <li className={day===5? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Fri</div> <div>11:00AM - 11:00PM</div>
                        </li>
                        <li className={day===6? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Sat</div> <div>11:00AM - 11:00PM</div>
                        </li>
                        <li className={day===7? styles.Today : ''}>
                            <div className={styles.DayOfWeek}>Sun</div> <div>Closed</div>
                        </li>
                    </ul>
                </div>
            </section>
        }
        </>
    );
};