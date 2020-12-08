// import WishlistModal from './WishlistModal';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"
import { Card } from "react-bootstrap";
import "./style.css";
const secretSanta = require('secret-santa-generator');

export default function DisplayWishList() {

  // Use State and Hooks Setting //

  const { pathname } = useLocation();

  // const [memberList, setMemberList] = useState([])

  const [names, setNames] = useState()

  useEffect(() => {
    retrieveMembers()
  }, [])


  const namesTable = secretSanta.buildSecretSantaTable(names)

  const result = Object.values(namesTable);

  // External JS functions //

  const retrieveMembers = () => {
    const groupId = pathname.split("/")[1];
    API.findGroup2(groupId)
      .then((res => {
        let nameList = (res.data.user)
        console.log(nameList)
        setNames(nameList)
      }))
  }

  const runDraw = (e) => {
    console.log("hello")
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
          {names.map((names) =>
            <li>{names}</li>
          )}

          {result.map((santas) =>
            <li>{santas}</li>
          )}



          <button className="create-group-button btn btn-primary" onClick={runDraw}>
            Draw!
          </button>


        </Card.Body>
      </Card>
    </div>
  );
}
