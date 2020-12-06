import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import DisplayMembers from './DisplayMembers';



export default function AddMembers() {

    const { pathname } = useLocation();

    // Use State and Hooks Setting //

    const [MemberString, setMember] = useState({ name: "" })

    const handleInputChange = (e) => {
        e.preventDefault()
        setMember({ ...MemberString, [e.target.name]: e.target.value })
    }

    // External JS functions //

    // Pushing Member Name to the MemberNames Array in Group Database //

    const addMember = (e) => {
        e.preventDefault();
        console.log(MemberString)
        const groupId = pathname.split("/")[1];
        API.addMembers(MemberString, groupId)
            .catch(err => console.log(err));
    }

    // Visual Rendering //

    return (
        <div className="container">

            <div className="row add-members-modal">
                <div className="col-12">

                    <DisplayMembers />

                    <h4 className="add-title-main">Add members:</h4>

                    <form>

                        {/* Name  */}

                        <h5 className="members-add-title">Name:</h5>
                        <input type="text" name="name" onChange={handleInputChange}></input>

                        <button className="add-member-button" onClick={addMember}>Add</button>
            
                    </form>

                </div>
            </div>

        </div>
    )
}
