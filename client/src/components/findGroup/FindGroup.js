import React, { useRef } from 'react';
import API from '../../utils/API';
import { useHistory } from "react-router-dom";

export default function FindGroup() {

    // Use State and Hooks Setting //
    const passwordRef = useRef()
    const groupRef = useRef()


    // External JS functions //

    const findGroup = async (e) => {
        e.preventDefault()
        RouteChange()
    }

    // Redirect Page to Main Group //

    const history = useHistory();

    const RouteChange = async () => {
        const { data } = await API.findGroup(groupRef.current.value, passwordRef.current.value)
        let path = "/" + data._id + "/" + data.name
        history.push(path);
    }


    // Visual Rendering //

    return (
        <div className="container">
            <div className="row find-group-modal">
                <div className="col-12">
                    <h4 className="find-title-main">Join Existing Group:</h4>

                    <form>

                        {/* Group Name  */}

                        <h4 className="find-title-name">Group Name:</h4>
                        <input type="text" ref={groupRef} name="join-group" placeholder="Group name" />
                        <h4 className="find-title-password">Password:</h4>
                        <input type="text" ref={passwordRef} name="join-password" placeholder="Holly Jolly Christmas" />

                        <button className="find-group-button" onClick={findGroup}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
