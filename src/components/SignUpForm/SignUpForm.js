import { useState } from "react";
import * as usersService from '../../utilities/users-service';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({user, setUser}) {

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
        <div>
            <div>
                <h3>Sign up</h3>
                <form onSubmit={handleSubmit} method="POST">
                    <input type="text" onChange={handleChange} placeholder="First Name"  name="firstName"></input>
                    <input type="text" onChange={handleChange}  placeholder="Last Name" name="lastName"></input>
                    <input type="email" onChange={handleChange} placeholder="Email"  name="email"></input>
                    <input type="password" onChange={handleChange} placeholder="Password"  name="password"></input>
                    <input type="password" onChange={handleChange} placeholder="Confrim"  name="confirm"></input>
                    <input type="text" onChange={handleChange} placeholder="Phone Number" name="phone"></input>
                    <input type="text" onChange={handleChange} placeholder="Zip Code"  name="zipCode"></input>
                    <div>
                        <button type="submit" >Sign Up</button>
                    </div>
                </form>
                <div>
                    <p>Already have an account? <a>Sign In</a></p>
                </div>
            </div>
            <div>
                <img src="https://i.imgur.com/xSsjTZr.png" alt="food-truck-image" />
            </div>
        </div>
    )
}