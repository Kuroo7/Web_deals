import { useEffect, useState } from "react";
// import { useEffect } from "react";
import PropertyData from "../components/propertyData"
import PropertyForm from "../components/propertyForm";
const Profile = () => {

    const [Properties, setProperties] = useState(null)



    useEffect(() => {
        const fetchProperties = async () => {
            const response = await fetch('/api/sellbuildinfo')
            const json = await response.json()
            if (response.ok) {
                setProperties(json)

            }
        }
        fetchProperties()
    }, [])

    return (
        <div className="profile">
            <div className="property">
                {Properties && Properties.map((Property) => (
                    <PropertyData key={Property._id} Property={Property} />
                ))}
            </div>
            <PropertyForm />
        </div>
    )
}
export default Profile;