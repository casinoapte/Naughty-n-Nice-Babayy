import React, { Component } from 'react'
import Addmembers from "./AddMembers"

class DisplayMembers extends React.Component {

    // Use State and Hooks Setting //

    



    // External JS functions //

   

    // Visual Rendering //

    render() {

        return (
            <div className="container">

                <div className="row members-display-modal">
                    <div className="col-12">

                        <h2 className="display-members-title">Members:</h2>

                        <ol>
                            <li className="name-display">
                                {/* {this.state} */}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayMembers;
