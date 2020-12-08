import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./NoMatch.css"

export default function ErrorPage() {
    return (
        < >
            <div class="window">
                <div className="santa">
                <div className="head">
                    <div className="face">
                    <div className="redhat">
                        <div className="whitepart"></div>
                        <div className="redpart"></div>
                        <div className="hatball"></div>
                    </div>
                    <div className="eyes"></div>
                    <div className="beard">
                        <div className="nouse"></div>
                        <div className="mouth"></div>
                    </div>
                    </div>
                    <div className="ears"></div>
                </div>
                <div className="body"></div>
                </div>
            </div><br></br>
            <div className="message">
                <h1></h1>
                <h1>404 ERROR!</h1>
                <h2 className="message-2">Only naughty boys and girls end up here!<br></br>
                <a href="javascript:history.back()">Click here to go home</a></h2>
            </div>
        </>
    )
}
