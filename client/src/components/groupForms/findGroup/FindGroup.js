import React, { useRef } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../style.css";

export default function FindGroup() {
  // Use State and Hooks Setting //
  const passwordRef = useRef();
  const groupRef = useRef();

  // External JS functions //

  const findGroup = async (e) => {
    e.preventDefault();
    RouteChange();
  };

  // Redirect Page to Main Group //

  const history = useHistory();

  const RouteChange = async () => {
    const { data } = await API.findGroup(
      groupRef.current.value,
      passwordRef.current.value
    );
    let path = "/" + data._id + "/" + data.name;
    history.push(path);
  };

  // Visual Rendering //

  return (
        <div className="col-6">
          <Card
            style={{ width: "25rem" }}
            className="container-fluid group-card"
            id="group-card"
          >
            <Card.Body>
              <Card.Title>Join Existing Group</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                Enter Details here
                </Card.Subtitle>
                <br></br>
              <form>
                {/* Group Name  */}

                <h5 className="find-title-name">Group Name:</h5>
                <input
                  type="text"
                  ref={groupRef}
                  name="join-group"
                  placeholder="Group name"
                />

                {/* Group Password  */}

                <h5 className="find-title-password">Password:</h5>
                <input
                  type="text"
                  ref={passwordRef}
                  name="join-password"
                  placeholder="Holly Jolly Christmas"
                />

                <br></br>

                <button
                  className="find-group-button btn btn-primary"
                  onClick={findGroup}
                >
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
     
  );
}
