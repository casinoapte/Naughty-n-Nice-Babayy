import React, { Component } from 'react'
import GroupDescription from './GroupDescription';


class DisplayGroupDescription extends React.Component {

    // Use State and Hooks Setting //

    state = {
        // members: 
    }



    // External JS functions //

    displayMembers = (id) => {
        console.log(this.state.members);
    }

    // Visual Rendering //

    render() {

        return (
            <div className="container">

                <div className="row members-display-modal">
                    <div className="col-12">

                        <h2>Description:</h2>

                        <ol>
                            <li className="name-display">
                                {/* {this.state} */}
                            </li>
                        </ol>
                        <GroupDescription/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayGroupDescription;
