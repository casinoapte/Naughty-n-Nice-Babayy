import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"


const MembersComponent = () => {

    // Use State and Hooks Setting //

    const { pathname } = useLocation();

    const [MemberString, setMember] = useState()

    const [MemberList, listmember] = useState()

    const handleInputChange = (e) => {
        e.preventDefault()
        setMember({ ...MemberString, [e.target.name]: e.target.value })
    }

    // External JS functions //

    // Pushing Member Name to the MemberNames Array in Group Database //

    const addMember = (e) => {
        e.preventDefault();
        const groupId = pathname.split("/")[1];
        API.addMembers(MemberString, groupId)
            .catch(err => console.log(err));
        retrieveMembers()
    }

    // Retrieving Members Data back from DB to display //

    const retrieveMembers = () => {
        const groupId = pathname.split("/")[1];
        API.findGroup2(groupId)
            .then((res => {
                console.log(res.data.user);
                // listmember(res.data.user)
            }))
    }

    retrieveMembers()

    // console.log(listmember);


    // Visual Rendering //

    return (
        <div className="container">

            <div className="row add-members-modal">
                <div className="col-12">
                    <h3 className="add-title">Members:</h3>

                    <ul className="name-display">
                        <li>

                        </li>
                    </ul>


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

export default MembersComponent;