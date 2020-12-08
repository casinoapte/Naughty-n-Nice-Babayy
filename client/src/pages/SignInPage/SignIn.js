import React from 'react'
import SignUp from "../../components/SignInComponents/SignUpComp"
import Login from "../../components/SignInComponents/LoginComp"


export default function SignIn() {
    return (
        <div className="container">
            <div className="row create-group-card ">
                <SignUp />
                <Login />
            </div>
        </div>

    )
}
