import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import DescriptionModal from './DescriptionModal';
import API from "../../utils/API"
export function descriptionAdd() { }


export default function DescriptionComponent() {

    // Use State and Hooks Setting //
    const { pathname } = useLocation();

    const [DescriptionString, setDescription] = useState()


    const handleInputChange = (e) => {
        e.preventDefault()
        setDescription({ ...DescriptionString, [e.target.name]: e.target.value })
    }

    // External JS functions //

    // Pushing Description Array in Group Database //

    const descriptionAdd = (e) => {
        console.log(DescriptionString);
        e.preventDefault();
        const groupId = pathname.split("/")[1];
        API.addDescription(DescriptionString, groupId)
            .catch(err => console.log(err));
    }


    // External JS functions //


    // Visual Rendering //

    return (
        <div className="container">

            <div className="row members-display-modal">
                <div className="col-12">

                    <h2>Description:</h2>

                    <ul>
                        <li className="name-display">
                            {/* {this.state} */}
                        </li>
                    </ul>

                    <h5 className="members-add-title">Description:</h5>
                        <textarea type="text" name="description" onChange={handleInputChange}></textarea>

                        <button className="add-member-button" onClick={descriptionAdd}>Add</button>

                </div>
            </div>
        </div>
    )

}

