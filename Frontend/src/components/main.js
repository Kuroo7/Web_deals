import React from 'react'
import { Link } from 'react-router-dom'
export default function Main() {
    return (
        <>
            <center>
                <div className="content">
                    <div className="content-info">
                        <h1 className='Main-heading'>Let us help you acheive your <br /> Dream Deal! </h1>
                        <p className='heading-para'>Let us help you achieve, sit amet consectetur adipisicing elit. <br /> Esse reiciendis illo tempora aliquam provident debitis.</p>
                        <Link to="SignUp"><button>Get Started</button></Link>
                    </div>
                </div>
            </center>
        </>
    )
}