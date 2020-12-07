import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import { Card } from "react-bootstrap";
import "./style.css"


const MembersComponent = (props) => {

    // Use State and Hooks Setting //

    const { pathname } = useLocation();

    const [MemberString, setMember] = useState()

    const [memberList, setMemberList] = useState([])

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
                let nameList = (res.data.user)
                console.log(nameList);
                setMemberList(nameList)
            }))
    }

    retrieveMembers()

    // console.log(listmember);


    // Visual Rendering //

    return (
        <div className="col-4">
          <Card
            style={{ width: "20rem" }}
            className="container-fluid group-card"
            id="group-card"
          >
            <Card.Body>
              <Card.Title>Members</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Add members:
              </Card.Subtitle>
              <br></br>
              <form>
                {/* Name of Member  */}
                {memberList && memberList.map(member => (
                  <h3>{member.name}</h3>
                ))}

                <h5>Name:</h5>
                <input className="members-add-title" type="text" name="name" onChange={handleInputChange} />

                <br></br>

                <button
                  className="add-member-button btn btn-primary"
                  onClick={addMember}>
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
        
    )
}

export default MembersComponent;