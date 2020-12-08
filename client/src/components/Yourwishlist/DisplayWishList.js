// import WishlistModal from './WishlistModal';
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style.css";
const secretSanta = require('secret-santa-generator');

export default function DisplayWishList() {
  

  const namesArray = ['Ryan', 'Casino', 'Colby', 'Charlie', 'Joshua', 'Shav']
 
  const namesTable = secretSanta.buildSecretSantaTable(namesArray)

  const result = Object.values(namesTable);
  
  // Use State and Hooks Setting //





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
          <Card.Title>Member Draw:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">***</Card.Subtitle>
          {namesArray.map((names) =>
        <li>{names}</li>
        )};

          {result.map((santas) =>
        <li>{santas}</li>
        )};
          
          

          <button
                  className="create-group-button btn btn-primary"
                  
                >
                  Draw!
                </button>


        </Card.Body>
      </Card>
    </div>
  );
}
