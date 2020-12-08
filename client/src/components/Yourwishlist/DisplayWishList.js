// import WishlistModal from './WishlistModal';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import { Card } from "react-bootstrap";
import "./style.css";
const secretSanta = require('secret-santa-generator');

export default function DisplayWishList() {
  
  // Use State and Hooks Setting //
  
  const { pathname } = useLocation();
  
  const namesArray = ['Ryan', 'Colby', 'Joshua']
  
  const namesTable = secretSanta.buildSecretSantaTable(namesArray)
  const result = Object.values(namesTable);
  console.log(result);
  
  useEffect(() => {
    getMemberNames()
  }, [])
  
  
  // External JS functions //
  
  // Getting Member Names //
  
  const getMemberNames = () => {
    const groupId = pathname.split("/")[1];
    API.findGroup2(groupId)
    .then((res => {
      let realNamesArray = res.data.user
      
      const finalNames = realNamesArray.map(function(name) {
        return name['name']
      })
      
      console.log(finalNames);
    }))
  }





  
  const drawNames = (e) => {
    e.preventDefault()
    console.log("hello");
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

          {namesArray.map((names) =>
            <li className="draw-members-fixed">{names}</li>
          )}

          {result.map((santas) =>
            <li className="draw-members-generate">{santas}</li>
          )}


          <button className="create-group-button btn btn-primary" onClick={drawNames}>
            Draw!
          </button>


        </Card.Body>
      </Card>
    </div>
  );
}
