import React, { useState } from "react";

export default function Manage_content() {
  let pendingContent = localStorage.getItem("pendingContent");
  const [pendingObj, setpendingObj] = useState(
    pendingContent ? JSON.parse(pendingContent) : []
  );

  function discardContent(title, description, author) {
    console.log("discard called");
    let i;
    pendingObj.forEach((element, index) => {
      if (
        element.title == title &&
        element.description == description &&
        element.author == author
      )
        i = index;
    });
    let temp = pendingObj;
    setpendingObj(temp.splice(i, 1));
    // console.log(pendingObj);
    localStorage.setItem("pendingContent", JSON.stringify(pendingObj));
  }
  function publishContent(title, description, author) {
    console.log("publish called");
    discardContent(title, description, author);
    let approvedContent = localStorage.getItem("approvedContent");
    let approvedObj = [];
    let today = new Date();
    if (approvedContent) approvedObj = JSON.parse(approvedContent);
    let newContent = {
      author: author,
      title: title,
      description: description,
      date: today.toUTCString(),
      review: [],
    };
    approvedObj.push(newContent);
    localStorage.setItem("approvedContent", JSON.stringify(approvedObj));
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {pendingObj.map((element, index) => {
        return (
          <div
            key={index}
            className="noteCard my-2 mx-2 card"
            style={{ width: "80%" }}
          >
            <div className="card-body">
              <h2 className="card-title">
                <b>{element.title}</b>
              </h2>
              <p className="card-text">{element.description}</p>
              <div className="my-2" style={{ color: "rgb(140, 142, 145)" }}>
                Created By: {element.author}
              </div>
              <button
                className="btn btn-primary mx-2"
                onClick={publishContent(
                  element.title,
                  element.description,
                  element.author
                )}
              >
                Publish Content
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={discardContent(
                  element.title,
                  element.description,
                  element.author
                )}
              >
                Discard Content
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
