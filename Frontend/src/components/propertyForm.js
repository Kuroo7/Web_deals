import { useState } from "react"


const PropertyForm = () => {


    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [price, setPrice] = useState('')
    const [err, setError] = useState(null)


    const HandleSubmit = async (e) => {
        e.preventDefault()

        const property = { title, desc, contact, email, price }

        const response = await fetch('/api/sellbuildinfo', {
            method: 'POST',
            body: JSON.stringify(property),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)

        }
        if (response.ok) {
            setTitle('')
            setDesc('')
            setContact('')
            setEmail('')
            setPrice('')
            setError(null)

            console.log("New Workout Added");

        }



    }



    return (
        <form className="create" onSubmit={HandleSubmit}>
            <h3>Add a new Property</h3>
            <label  >Property Name</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label  >Contact No.</label>
            <input
                type="number"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
            />
            <label  >Email :</label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label  >Description</label>
            <textarea onChange={(e) => setDesc(e.target.value)}
                value={desc} cols="30" rows="10"></textarea>
            <label>Price</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            <button>Add Property</button>
            {err && <div className="error">{err}</div>}
        </form>
    )
}
export default PropertyForm