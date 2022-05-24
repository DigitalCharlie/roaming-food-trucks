import styles from "./BusinessInfo.module.css";

export default function BusinessInfo({ foodTruck }) {
    console.log(foodTruck.location)
    return (
        <>
        {    
            foodTruck.location &&
            <div className={styles.BusinessInfo}>
                <div>
                    <p>{foodTruck.location.street}</p>
                    <p>{foodTruck.location.city}, {foodTruck.location.state} {foodTruck.location.zipCode}</p>
                    <p>{foodTruck.phone}</p>
                    <p>Wait Time, 15 minutes</p>
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