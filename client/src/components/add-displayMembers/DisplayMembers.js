import React from 'react'
import { useLocation } from "react-router-dom";
import API from "../../utils/API"


export default function DisplayMembers() {

    // Use State and Hooks Setting //

    const { pathname } = useLocation();


    // External JS functions //

    const retrieveMembers = () => {
        const groupId = pathname.split("/")[1];
        API.findGroup2(groupId)
            .then((res => {
                console.log(res.data.user);
            }))
    }

    retrieveMembers()


    // Visual Rendering //

    return (
        <div className="container">

            <div className="row members-display-modal">
                <div className="col-12">

                    <h2 className="display-members-title">Members:</h2>

                    <ol>
                        <li className="name-display">
                            {/* {res.data.user[0]} */}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )

}

