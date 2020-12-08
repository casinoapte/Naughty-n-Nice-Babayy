import React from 'react'
import API from "../../utils/API"
import "./style.css"

export default function DeleteButton(props) {



  const deleteMember = (e) => {
    let name = props
    console.log(name);
    API.deleteMember(name)
      .catch(err => console.log(err));
  }


  return (
    <span className="delete-member-btn btn btn-sm btn-light remove-participant" {...props} role="button" tabIndex="0" onClick={deleteMember}>
      🎅🏻
    </span>
  )
}

