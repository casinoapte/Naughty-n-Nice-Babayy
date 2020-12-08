import React from 'react'
import "./style.css"

export default function DeleteButton(props) {
    return (
        <span className="delete-member-btn btn btn-sm btn-light remove-participant" {...props} role="button" tabIndex="0">
        🎅🏻
      </span>
    )
}

