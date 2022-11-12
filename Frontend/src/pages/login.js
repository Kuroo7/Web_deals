import React, { useState } from 'react';
import { Link } from "react-router-dom";


import { useLogin } from '../hooks/useLogin';


export default function Login() {
    const { login, error, isLoading } = useLogin()


    const [logindata, setlogindata] = useState({
        email: "",
        password: "",
    });
    function handleChange(event) {
        // console.log(event)
        const { name, value } = event.target;
        // console.log(logindata.event.target.value)
        setlogindata(previousdata => {
            return {
                ...previousdata,
                [name]: value
            }
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(logindata.email, logindata.password,)

    }
    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Log in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={logindata.email}
                                    onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                    value={logindata.passWord} />
                            </div>
                            {error && <div className='error'>{error}</div>}
                            <input disabled={isLoading} type="submit" value="Login" className="btn solid" />
                            {/* <p className="social-text">Or Sign in with social platforms</p> */}
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn"><Link to="/SignUp">SignUp</Link></button>
                        </div>
                        {/* <Logo /> */}
                        {/* <img src="img/log.svg" className="image" alt="" /> */}
                    </div>

                </div>
            </div>
        </>)
}