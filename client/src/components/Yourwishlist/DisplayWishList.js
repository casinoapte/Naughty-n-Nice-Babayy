import React, { Component } from 'react'
import WishlistModal from './WishlistModal';


export default function DisplayWishList() {

    // Use State and Hooks Setting //

    // External JS functions //

    
    // Visual Rendering //

    return (
        <div className="container">

            <div className="row members-display-modal">
                <div className="col-12">

                    <h2>Wishlist:</h2>

                    <ol>
                        <li className="name-display">
                            {/* {this.state} */}
                        </li>
                    </ol>
                    <WishlistModal />
                </div>
            </div>
        </div>
    )

}

