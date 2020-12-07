import React, { useState } from 'react';
import Parent from "./DescriptionComponent";
import API from "../../utils/API"
import { descriptionAdd } from "./DescriptionComponent"


class DescriptionModal extends React.Component {

  click() {
    Parent.descriptionAdd();
  }




  render() {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal2"
        >
          Add Description
      </button>

        <div
          className="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-description" id="exampleModalLabel">
                  Description:
              </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6 className="description-modal-title">Description:</h6>
                <textarea className="description-modal-textarea" id="description" name="description"></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
              </button>
                <button type="button" className="btn btn-primary" onClick={this.click}>
                  Save
              </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DescriptionModal;