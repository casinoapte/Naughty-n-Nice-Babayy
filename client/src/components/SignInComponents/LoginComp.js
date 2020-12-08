import React from 'react'
import { Card } from "react-bootstrap";
import "./style.css"


export default function Login() {
    return (
        <div className="col-6">
          <Card
            style={{ width: "25rem" }}
            className="container-fluid group-card"
            id="group-card"
          >
            <Card.Body>
              <Card.Title>Login:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Enter Credentials 
              </Card.Subtitle>
              <br></br>
              <form>
                {/* Group Name  */}

                <h5>Username:</h5>
                <input type="text" name="name"  />

                {/* Group Password  */}

                <h5>Password:</h5>
                <input
                  type="password"
                  name="password"
                  
                />

              
                <br></br>

                <button
                  className="create-group-button btn btn-primary"
                  
                >
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
    
    )
}
