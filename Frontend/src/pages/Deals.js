import React, { useEffect } from 'react'
// import Navbar from './components/Navbar'
import Card from '../components/Card';
// import "./DealsStyle.css";


export default function Deals() {
    const [Properties, setProperties] = React.useState("");
    useEffect(() => {
        const fetchProperties = async () => {
            const response = await fetch('/api/sellbuildinfo')
            const json = await response.json()
            console.log(json);
            if (response.ok) {
                setProperties(json);
                // console.log(json);
            }
        }
        fetchProperties()
        // console.log(setProperties);
    }, [])
    const cards = Array.from(Properties).map(item => {
        return (
            <Card
                key={item._id}
                title={item.title}
                desc={item.desc}
                contact={item.contact}
                email={item.email}
                createdAt={item.createdAt}
                price={item.price} />
        )
    });

    // for (let i = 0; i < Properties.length; i++) {
    //   // console.log(Properties[i].title);
    //   console.log(Properties[i].title);
    //   <Card
    //     key={Properties[i]._id}
    //     title={Properties[i].title}
    //     desc={Properties[i].desc}
    //     contact={Properties[i].contact}
    //     email={Properties[i].email}
    //     createdAt={Properties[i].createdAt}
    //     price={Properties[i].price} />
    // }
    // const data = Properties.map(Property => {
    //   // <Card key={Property._id} Property={Property} />

    // {Properties && Properties.map((Property) => (
    //   <Card key={Property._id} Property={Property} />
    // ))}


    //   console.log(Property);
    // })
    return (
        <>

            <div className="deals-container">
                <h1>New Deals For You !</h1>
                {cards}
            </div>
            {/* <div>Deals</div>   */}
        </>
    )
}