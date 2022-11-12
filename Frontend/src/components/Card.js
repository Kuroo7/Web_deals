import React from 'react';

// import Deals from '../Deals'

export default function Card(props) {
    return (
        <div className="deal-cards">
            <h4 >{props.title}</h4>
            <p><strong>Description</strong></p>
            <p>{props.desc}</p>

            <p><strong> Contact No.</strong> {props.contact}</p>
            <p><strong>Email :</strong>{props.email}</p>
            <p><strong>Posted on :</strong>{props.createdAt}</p>
            <p><strong>Price :</strong>{props.price}</p>

        </div>
    )
}