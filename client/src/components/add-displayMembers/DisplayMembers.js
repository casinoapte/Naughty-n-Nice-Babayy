import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import API from "../../utils/API"


export default function DisplayMembers(props) {

    // Use State and Hooks Setting //

    const { pathname } = useLocation();

    // const [MemberList, ListMembers] = useState({
        // names: []
    // })

    // External JS functions //

    const retrieveMembers = () => {
        const groupId = pathname.split("/")[1];
        API.findGroup2(groupId)
            .then((res => {
                // ListMembers(res.data.user)
                // console.log(ListMembers);
            }))
    }

    retrieveMembers()

    const displayMembers = (users) => {

    //     const names = users.map(user => {
    //         console.log(users);
    //     })

    }


    // Visual Rendering //

    return (
        <div className="container">

            <div className="row members-display-modal">
                <div className="col-12">

                    <h2 className="display-members-title">Members:</h2>

                    <ol>
                        <li className="name-display">

                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )

}

