import React from "react";
export default function Add_content(props) {
  function publishRequestBtnClick() {
    props.showAlert("Request to publish data sent successfully", "success");
    let pendingContent = localStorage.getItem("pendingContent");
    let pendingObj = [];
    if (pendingContent) pendingObj = JSON.parse(pendingContent);
    let newContent = {
      author: document.getElementById("Name").value,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    };
    pendingObj.push(newContent);
    localStorage.setItem("pendingContent", JSON.stringify(pendingObj));
    document.getElementById("publishForm").reset();
  }
  return (
    <div style={{ marginLeft: "15px" }}>
      <form id="publishForm">
        <h1>Add Your Content Here</h1>
        <div className="row mb-3 my-3">
          <label htmlFor="Name" className="col-sm-2 col-form-label">
            Author's Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="Name"
              style={{ width: "90%" }}
            />
          </div>
        </div>
        <div className="row mb-3 my-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              style={{ width: "90%" }}
            />
          </div>
        </div>
        <div className="row mb-3 my-3">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="description"
              rows="10"
              style={{ width: "90%" }}
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          id="publishRequestBtn"
          onClick={publishRequestBtnClick}
        >
          Send Request to Publish Content
        </button>
      </form>
    </div>
  );
}
