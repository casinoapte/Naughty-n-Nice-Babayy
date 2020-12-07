// import WishlistModal from './WishlistModal';
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

export default function DisplayWishList() {
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
          <Card.Title>Wish List</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">***</Card.Subtitle>
          <br></br>
          <form>
            {/* Wish List Item  */}
            <ol>
              <li className="name-display">{/* {this.state} */}</li>
            </ol>
            {/* <WishlistModal /> */}
            <br></br>

          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
