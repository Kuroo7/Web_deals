import React from 'react'
import { FaInstagram, FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="sec-footer">
            <div className="footer">
                <h1>Contributors:</h1>
                <div className="contributor">
                    <div className='social'>
                        <FaGithub className='icon' /><span> Prateek</span>
                    </div>
                    <div className='social'>
                        <FaGithub className='icon' /><span> Ashish</span>
                    </div>
                    <div className='social'>
                        <FaGithub className='icon' /><span> Atif</span>
                    </div>
                </div>
            </div>
            <p className='copyright'>&#169; Reeds</p>
        </div>
    )
}