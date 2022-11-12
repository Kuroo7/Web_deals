import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSignUp } from '../hooks/useSignUp';
// import Navbar from '../components/navbar';
// import "./signup.css";
// import { useNavigate } from 'react-router-dom';



export default function SignUp() {
    // const navigate = useNavigate();
    const { signUp, error, isLoading } = useSignUp()
    const [signupData, setSignupdata] = useState({
        password: "",
        email: "",
        contact: "",
        adharNo: "",
        panNo: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        // console.log(signupData.event.target.value)
        setSignupdata(previousdata => {
            return {
                ...previousdata,
                [name]: value
            }
        });
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        await signUp(signupData.email, signupData.password, signupData.adharNo, signupData.panNo, signupData.contact)


    }
    return (
        <>
            {/* <Navbar /> */}
            <div className="container" >
                <div className="forms-container">
                    <div className="signin-signup">


                        <form className="sign-in-form" onSubmit={handleSubmit}>
                            <h2 className="title">Sign Up</h2>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="string"
                                    placeholder="Email"
                                    name='email'
                                    value={signupData.email}
                                    onChange={handleChange} />
                            </div>
                            {/* <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text"
                                    placeholder="Username"
                                    name='username'
                                    value={signupData.username}
                                    onChange={handleChange} />
                            </div> */}
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={signupData.passWord}
                                    onChange={handleChange} />
                            </div>
                            {/* <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password"
                                    placeholder="Confirm Password"
                                    name='confirmPassWord'
                                    value={signupData.confirmPassWord}
                                    onChange={handleChange} />
                            </div> */}
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="number"
                                    placeholder="Contact"
                                    name='contact'
                                    value={signupData.contact}
                                    onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="number"
                                    placeholder="Aadhar Nom"
                                    name='adharNo'
                                    value={signupData.adaharNo}
                                    onChange={handleChange} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="string"
                                    placeholder="PAN"
                                    name='panNo'
                                    value={signupData.panNo}
                                    onChange={handleChange} />
                            </div>
                            {error && <div className='error'>{error}</div>}

                            <input disabled={isLoading} type="submit" value="SignUp" className="btn solid" />
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
                            <h3>Already have an account ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn"><Link to="/Login">Login</Link></button>
                        </div>
                        {/* <img src={require("./log.svg")} className="image" alt="" /> */}
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn">Sign in</button>
                        </div>
                        {/* <img src={require("./register.svg")} className="image" alt="" /> */}
                    </div>
                </div>
            </div>



            {/* Old Sign Up form */}
            {/* <div classNameName="signupbody">
      <div classNameName="SignUp-Box container" >
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>
              <div classNameName="username-box user-box">
                <input type="text" 
                classNameName='Username' 
                onChange={handleChange}
                name="username"
                value={signupData.username}/>
                <label>Username</label>
              </div>
              <div classNameName="email user-box">
                <input type="text" 
                onChange={handleChange}
                name="email"
                value={signupData.email}/>
                <label>Email</label>
              </div>
              <div classNameName="password-box user-box">
                <input type="text" 
                classNameName='Password'
                onChange={handleChange}
                name="password"
                value={signupData.passWord}/>
                <label>Password</label>
              </div>
              <div classNameName="confirmPassWord-box user-box">
                <input type="text" 
                classNameName=''
                onChange={handleChange}
                name="confirmPassWord"
                value={signupData.confirmPassWord}/>
                <label>Confirm Password</label>
              </div>
              <div classNameName="phone-box user-box">
                <input type="text" 
                name='contact'
                onChange={handleChange}
                value={signupData.contact}/>
                <label >Contact No:</label>
              </div>
              <div classNameName="AadharNom-box user-box">
                <input type="text"
                value={signupData.aadaharNom}
                name="aadharNom"
                onChange={handleChange}/>
                <label>Aadhar No:</label>
              </div>
              <div classNameName="pan-box user-box">
                <input type="text"
                name="pan"
                value={signupData.pan} 
                onChange={handleChange}/>
                <label>PAN No:</label>
              </div>
              <div classNameName="button-form">
                <button classNameName='register-button'>Register</button>
                <div classNameName="login-redirect">
                  Already a member?<br></br>
                  <Link classNameName="link" to="/Login"> LOGIN</Link>                
                </div>
              </div>
          </form>
      </div>
    </div> */}
        </>
    )
}