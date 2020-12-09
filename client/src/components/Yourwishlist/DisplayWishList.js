import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import { Card } from "react-bootstrap";
import "./style.css";
const secretSanta = require('secret-santa-generator');

export default function DisplayWishList() {
  
  // Use State and Hooks Setting //
  
  const { pathname } = useLocation();
  
  const [namesArray, setNameArray] = useState([])
  // const namesArray = [];
  
  const namesTable = secretSanta.buildSecretSantaTable(namesArray)
  const result = Object.values(namesTable);
  
  
  // External JS functions //
  
  // Getting Member Names //
  
  const getMemberNames = () => {
    const groupId = pathname.split("/")[1];
    API.findGroup2(groupId)
    .then((res => {
      let realNamesArray = res.data.user;
      const namesArray = []
      const finalNames = realNamesArray.map(function(name) {
        return name['name']
      })
      namesArray.push(...finalNames)
      setNameArray(namesArray)
    }))
  }
  
  const drawNames = (e) => {
    e.preventDefault()
    getMemberNames();
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
          <Card.Title>Member Draw:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">***</Card.Subtitle>

          {/* <div className="card-columns">
                </div> */}
          <div className="card bg-light wishlist-card">
            <div className="card-block">
              <div className="row">
                <div className="col">
                  {namesArray.map((names) => (
                    <p className="draw-members-fixed btn btn-dark ">
                      {names}{" "}
                    </p>
                  ))}
                </div>
                <div className="col">
                  {result.map((santas) => (
                    <p className="draw-members-generate btn btn-dark bi bi-arrow-left-circle">
                      {santas}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            className="create-group-button btn btn-primary"
            onClick={drawNames}
          >
            Draw!
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}