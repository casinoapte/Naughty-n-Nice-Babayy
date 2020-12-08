// import DescriptionModal from './DescriptionModal';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import { Card } from "react-bootstrap";
import "./style.css"
export function descriptionAdd() { }

export default function DescriptionComponent() {

  // Use State and Hooks Setting //
  const { pathname } = useLocation();

  const [DescriptionString, setDescriptionString] = useState()

  const [ShowDetails, SetDetails] = useState([])

  const handleInputChange = (e) => {
    e.preventDefault()
    setDescriptionString({ ...DescriptionString, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getDescription()
  }, [])


  // External JS functions //

  // Pushing Description Array in Group Database //

  const descriptionAdd = (e) => {
    e.preventDefault();
    const groupId = pathname.split("/")[1];
    API.addDescription(DescriptionString, groupId)
      .catch(err => console.log(err));
    getDescription()
  }

  const getDescription = (e) => {
    const groupId = pathname.split("/")[1];
    API.findGroup2(groupId)
      .then((res => {
        let details = (res.data)
        SetDetails(details)
      }))
  }


  // Visual Rendering //

  return (
    <div className="col-4">
      <Card
        style={{ width: "20rem" }}
        className="container-fluid group-card"
        id="group-card"
      >
        <Card.Body>
          <Card.Title>Details:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ***
              </Card.Subtitle>
          <br></br>

          <p className="details-titles">Location: {ShowDetails.location}</p>
          <p className="details-titles">Party Time: {ShowDetails.time}</p>
          <p className="details-titles">Max Price: ${ShowDetails.price}</p>

          <form>

            {/* Location  */}

            <h5>Location:</h5>
            <input type="text" name="location" onChange={handleInputChange}></input>

            {/* Time  */}

            <h5>Time:</h5>
            <input type="text" name="time" onChange={handleInputChange}></input>

            {/* Max Gift Price  */}

            <h5>Max Price ($):</h5>
            <input type="number" name="price" onChange={handleInputChange}></input>

            <br></br>

            <button
              className="add-member-button btn btn-primary"
              onClick={descriptionAdd}>
              Add
                </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  )

}

