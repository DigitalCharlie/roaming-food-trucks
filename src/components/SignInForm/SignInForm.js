import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function SignInForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value});
        setError("");
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        }   catch {
            setError("Login Failed - Try Again")
        }
    };


    return (
        <div>
            <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={credentials.email} onChange={handleChange} required/>
                <label>Password</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                <button type="submit">Sign In</button>
            </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
};