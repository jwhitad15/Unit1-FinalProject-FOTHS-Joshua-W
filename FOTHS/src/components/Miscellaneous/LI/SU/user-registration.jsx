// import React from "react";
// import { useForm } from "react-hook-form";
// import "./user-login.css";

// function UserRegistration() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => {
//         const existingUser = JSON.parse(localStorage.getItem(data.email));
//         if (existingUser) {
//             console.log("Email is already registered!");
//         } else {
//             const userData = {
//                 name: data.name,
//                 email: data.email,
//                 password: data.password,
//             };
//             localStorage.setItem(data.email, JSON.stringify(userData));
//             console.log(data.name + " has been successfully registered");
//         }
//     };

//     return (
//         <>
//             <h2>Registration Form</h2>

//             <form className="user-registration" onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                     type="text"
//                     {...register("name", { required: true })}
//                     placeholder="Name"
//                 />
//                 {errors.name && <span style={{ color: "red" }}>*Name* is mandatory</span>}

//                 <input
//                     type="email"
//                     {...register("email", { required: true })}
//                     placeholder="Email"
//                 />
//                 {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

//                 <input
//                     type="password"
//                     {...register("password", { required: true })}
//                     placeholder="Password"
//                 />
//                 {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}

//                 <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
//             </form>
//         </>
//     );
// }

// export default UserRegistration;

import React, {useEffect, useRef} from "react";
import Dashboard from "../../../dashboard";
import '/.user-login.css'

function UserRegistration() {
    const firstName=useRef()
    const email=useRef()
    const password=useRef()
    const localSignup = localStorage.getItem(register);

    useEffect(()=> {
    
    })

    const handleClick = () => {
        if(firstName.current.value && email.current.value && password.current.value) {
            localStorage.setItem("firstName", firstName.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("register", email.current.value)
            alert("Account Registration Successful")
        }
    }

    return(
        <div>
            <div className="container">
                <div className="input-space">
                    <input placeholder="first-name" type="text" ref={firstName} />
                </div>
                <div className="input-space">
                    <input placeholder="email" type="text" ref={email} />
                </div>
                <div className="input-space">
                    <input placeholder="password" type="text" ref={password} />
                </div>
                <button onClick={handleClick}>Register</button>
            </div>
        </div>
    )
}

export default UserRegistration;