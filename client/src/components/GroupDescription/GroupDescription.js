import React, { Component } from 'react'
import DescriptionModal from './DescriptionModal';


export default function GroupDescription() {

    // Use State and Hooks Setting //

    // External JS functions //

    // Visual Rendering //

    return (
        <div className="container">

            <div className="row members-display-modal">
                <div className="col-12">

                    <h2>Group Description:</h2>

                    <ol>
                        <li className="name-display">
                            {/* {this.state} */}
                        </li>
                    </ol>
                    <DescriptionModal />
                </div>
            </div>
        </div>
    )

}

