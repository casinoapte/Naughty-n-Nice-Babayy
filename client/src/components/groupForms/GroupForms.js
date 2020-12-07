
import React, { useRef } from "react";
import CreateGroup from "./createGroup/CreateGroup";
import FindGroup from "./findGroup/FindGroup";
// import API from "../../../utils/API";
// import { useHistory } from "react-router-dom";
// import { Card } from "react-bootstrap";
import "./style.css";

export default function GroupForms() {
    return (
        <div className="container">
            <div className="row create-group-card ">
                <CreateGroup/>
                <FindGroup/>
            </div>
        </div>
    )
}
