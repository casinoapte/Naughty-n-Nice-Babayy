// import DescriptionModal from './DescriptionModal';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import { Card } from "react-bootstrap";
import "./style.css"
export function descriptionAdd() { }

export default function DescriptionComponent() {

  // Use State and Hooks Setting //
  const { pathname } = useLocation();

  const [DescriptionString, setDescriptionString] = useState()

  const [ShowDescription, SetDescription] = useState([])

  const handleInputChange = (e) => {
    e.preventDefault()
    setDescriptionString({ ...DescriptionString, [e.target.name]: e.target.value })
  }


  // External JS functions //

  // Pushing Description Array in Group Database //

  const descriptionAdd = (e) => {
    e.preventDefault();
    SetDescription(DescriptionString);
    const groupId = pathname.split("/")[1];
    API.addDescription(DescriptionString, groupId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  // External JS functions //


  // Visual Rendering //

  return (
    <div className="col-4">
      <Card
        style={{ width: "20rem" }}
        className="container-fluid group-card"
        id="group-card"
      >
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            ***
              </Card.Subtitle>
          <br></br>
          <ul>
            <li className="name-display">

              <p>{ShowDescription}</p>

            </li>
          </ul>
          <form>
            {/* Description  */}

            <h5>Input:</h5>
            <textarea type="text" name="description" onChange={handleInputChange}></textarea>

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

