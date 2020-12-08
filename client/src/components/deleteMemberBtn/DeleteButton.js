import React from 'react'
import "./style.css"

export default function DeleteButton(props) {



  const deleteMember = (e) => {
    let name = props
    console.log(name)



  }





  return (
    <span className="delete-member-btn btn btn-sm btn-light remove-participant" {...props} role="button" tabIndex="0" onClick={deleteMember}>
      🎅🏻
    </span>
  )
}

