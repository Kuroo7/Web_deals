const PropertyData = ({ Property }) => {

    const handleClick = async () => {
        await fetch('/api/sellbuildinfo/' + Property._id, {
            method: 'DELETE'
        })
    }

    return (

        <div className="propertyData">
            <h4>{Property.title}</h4>
            <p><strong>Description</strong></p>
            <p>{Property.desc}</p>

            <p><strong> Contact No.</strong> {Property.contact}</p>
            <p><strong>Email :</strong>{Property.email}</p>
            <p><strong>Posted on :</strong>{Property.createdAt}</p>
            <p><strong>Price :</strong>{Property.price}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default PropertyData