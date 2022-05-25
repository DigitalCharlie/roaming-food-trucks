import styles from "./BusinessInfo.module.css";
import SingleTruckMap from "../SingleTruckMap/SingleTruckMap";

export default function BusinessInfo({ foodTruck }) {
    console.log(foodTruck.location)
    return (
        <>
        {    
            foodTruck.location &&
            <div className={styles.BusinessInfo}>
                <div className={styles.MapInfo}>
                    <SingleTruckMap foodTruck={foodTruck}/>
                </div>
                <div className={styles.BusinessDetails}>
                    <p><img src="/assets/pin.png" alt="pin-icon" className={styles.BusinessIcons}/>{foodTruck.location.street}</p>
                    <p>{foodTruck.location.city}, {foodTruck.location.state} {foodTruck.location.zipCode}</p>
                    <p><img src="/assets/phone.png" alt="phone-icon" className={styles.BusinessIcons}/>{foodTruck.phone}</p>
                    <p><img src="/assets/clock.png" alt="clock-icon" className={styles.BusinessIcons}/>Wait Time, 15 minutes</p>
                    <li className={styles.BusinessHours}>
                        <p>Mon 11:00AM - 11:00PM</p>
                        <p>Tue 11:00AM - 11:00PM</p>
                        <p>Wed 11:00AM - 11:00PM</p>
                        <p>Thu 11:00AM - 11:00PM</p>
                        <p>Fri 11:00AM - 11:00PM</p>
                        <p>Sat 11:00AM - 11:00PM</p>
                        <p>Sun 11:00AM - 11:00PM</p>
                    </li>
                </div>
            </div>
        }
        </>
    );
};