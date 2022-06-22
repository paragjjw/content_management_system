import React, { useState, useEffect } from "react";

export default function Manage_content() {
  const [pendingContent, setpendingContent] = useState(
    localStorage.getItem("pendingContent")
  );
  const [pendingObj, setpendingObj] = useState(
    pendingContent ? JSON.parse(pendingContent) : []
  );

  function discardContent(index) {
    let tempArr = [...pendingObj];
    tempArr.splice(index, 1);
    console.log(tempArr, index);
    localStorage.setItem("pendingContent", JSON.stringify(tempArr));
    setpendingContent(localStorage.getItem("pendingContent"));
  }
  function publishContent(index) {
    let approvedContent = localStorage.getItem("approvedContent");
    let approvedObj = [];
    let today = new Date();
    if (approvedContent) approvedObj = JSON.parse(approvedContent);
    let newContent = {
      author: pendingObj[index].author,
      title: pendingObj[index].title,
      description: pendingObj[index].description,
      date: today.toUTCString(),
      review: [],
    };
    approvedObj.push(newContent);
    localStorage.setItem("approvedContent", JSON.stringify(approvedObj));
    discardContent(index);
  }
  useEffect(() => {
    setpendingObj(pendingContent ? JSON.parse(pendingContent) : []);
  }, [pendingContent]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {pendingObj.length ? (
        pendingObj.map((element, index) => {
          return (
            <div
              key={element.title + element.description + element.author}
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
                  onClick={() => publishContent(index)}
                >
                  Publish Content
                </button>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => discardContent(index)}
                >
                  Discard Content
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>
          <b>Nothing to display</b>
        </p>
      )}
    </div>
  );
}
