import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import styles from './SignInForm.module.css';
import { Link } from "react-router-dom";

export default function SignInForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError("");
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError("Login Failed - Try Again")
        }
    };


    return (
        <div>
            <div className={styles.container}>
                <div>
                    <h3 className={styles.signin}>Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <input className={styles.input} value={credentials.email} type="email" onChange={handleChange} placeholder="Email" name="email"></input>
                        <input className={styles.input} value={credentials.password} type="password" onChange={handleChange} placeholder="Password" name="password"></input>
                        <div>
                            <button className={styles.button} type="submit" >Sign In</button>
                        </div>
                        <p className="error-message">&nbsp;{error}</p>
                    </form>
                    <div className={styles.signupdiv}>
                        <p className={styles.signup}>Don't have an account?<br /><Link className={styles.link} to="/signup">Sign Up</Link></p>
                    </div>
                </div>
                <div>
                    <img className={styles.image} src="https://i.imgur.com/xSsjTZr.png" alt="food-truck-image" />
                </div>

            </div>

        </div>
    );
};