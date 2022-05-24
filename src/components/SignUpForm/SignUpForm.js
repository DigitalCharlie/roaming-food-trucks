import { useState } from "react";
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.css';
import { Link } from "react-router-dom";

export default function SignUpForm({ setUser}) {

    const [formData, setFormData] = useState({})

    function handleChange ({target: {name,value}}) { 
        // console.log(evt.target.value)
       
        setFormData({ ...formData, [name]: value })
    }
 console.log(formData)

 async function handleSubmit (evt)  {
        evt.preventDefault();
        try {
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData)
            setUser(user)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.signup}>Sign up</h3>
                <form onSubmit={handleSubmit} method="POST">
                    <input className={styles.input} type="text" onChange={handleChange} placeholder="First Name"  name="firstName"></input>
                    <input className={styles.input} type="text" onChange={handleChange}  placeholder="Last Name" name="lastName"></input>
                    <input className={styles.input} type="email" onChange={handleChange} placeholder="Email"  name="email"></input>
                    <input className={styles.input} type="password" onChange={handleChange} placeholder="Password"  name="password"></input>
                    <input className={styles.input} type="password" onChange={handleChange} placeholder="Confrim"  name="confirm"></input>
                    <input className={styles.input} type="text" onChange={handleChange} placeholder="Phone Number" name="phone"></input>
                    <input className={styles.input} type="text" onChange={handleChange} placeholder="Zip Code"  name="zipCode"></input>
                    <div>
                        <button className={styles.button} type="submit" >Sign Up</button>
                    </div>
                </form>
                <div className={styles.signindiv}>
                    <p className={styles.signin}>Already have an account?<br /> <Link className={styles.link} to="/login">Sign In</Link></p>
                </div>
            </div>
            <div>
                <img className={styles.image} src="https://i.imgur.com/xSsjTZr.png" alt="food-truck-image" />
            </div>
        </div>
    )
}