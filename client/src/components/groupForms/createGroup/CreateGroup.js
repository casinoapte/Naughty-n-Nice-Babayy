import { useState } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../style.css"

function CreateGroup() {
  // Use State and Hooks Setting //
  const [GroupObject, setGroupObject] = useState({
    name: "",
    password: "",
    membersName: [],
    membersNum: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setGroupObject({ ...GroupObject, [e.target.name]: e.target.value });
  };

  // External JS functions //

  // Handle submit new group button + Posting to DB //

  const handleBtnClick = (e) => {
    e.preventDefault();
    API.createGroup(GroupObject)
      .catch((err) => console.log(err))
      .then(RouteChange());
  };

  // Redirect Page to Main Group //

  const history = useHistory();

  const RouteChange = async () => {
    const { data } = await API.findGroup(
      GroupObject.name,
      GroupObject.password
    );
    console.log(data);
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
              <Card.Title>Create a Secret Santa Group</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Enter Details here
              </Card.Subtitle>
              <br></br>
              <form> 
                {/* Group Name  */}

                <h5>Group Name:</h5>
                <input type="text" name="name" onChange={handleInputChange} />

                {/* Group Password  */}

                <h5>Group Password:</h5>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                />

                {/* Group Description */}

                <h5>Group Description:</h5>
                <input
                  type="description"
                  name="description"
                  onChange={handleInputChange}
                />



                {/* Group Members  */}

                <h5>Group Members:</h5>
                <input
                  type="number"
                  name="membersNum"
                  onChange={handleInputChange}
                />
                <br></br>

                <button
                  className="create-group-button btn btn-primary"
                  onClick={handleBtnClick}
                >
                  Submit
                </button>
              </form>
            </Card.Body>
          </Card>
        </div>
    
  );
}

export default CreateGroup;
