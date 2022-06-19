import React, { useState } from "react";

export default function Home(props) {
  let approvedContent = localStorage.getItem("approvedContent");
  const [approvedObj, setapprovedObj] = useState(
    approvedContent ? JSON.parse(approvedContent) : []
  );
  function addReview(title, description, author, date) {
    let approvedContent = localStorage.getItem("approvedContent");
    let approvedObj = [];
    if (approvedContent) approvedObj = JSON.parse(approvedContent);
    approvedObj.forEach((element, index) => {
      if (
        props.user &&
        props.user.role == "super_admin" &&
        element.title == title &&
        element.description == description &&
        element.author == author &&
        element.date == date
      )
        element.review.push({
          description: document.getElementById(`content${index}`).value,
          name: props.user.username,
        });
    });
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      id="approvedCards"
    >
      {approvedObj.map((element, index) => {
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
              <div className="reviews">
                <ul>
                  Reviews:
                  {element.review.map((element1, index1) => {
                    return <li key={index1}>{element1}</li>;
                  })}
                </ul>
              </div>
              <div className="my-2" style={{ color: "rgb(140, 142, 145)" }}>
                Created By: {element.author}
                <br />
                Published On: {element.date}
              </div>
              <div
                className="mb-3 review"
                style={
                  props.user != null
                    ? props.user.role == "super_admin"
                      ? { display: "block" }
                      : { display: "none" }
                    : { display: "none" }
                }
              >
                <textarea
                  className="form-control"
                  id={`content${index}`}
                  rows="3"
                  placeholder="Enter your review here"
                ></textarea>
                <button
                  className="btn btn-primary mx-2 my-2"
                  onClick={addReview(
                    element.title,
                    element.description,
                    element.author,
                    element.date
                  )}
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
