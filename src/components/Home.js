import React, { useState } from "react";

export default function Home(props) {
  let approvedContent = localStorage.getItem("approvedContent");
  const [approvedObj, setapprovedObj] = useState(
    approvedContent ? JSON.parse(approvedContent) : []
  );
  function addReview(index) {
    let tempArr = [...approvedObj];
    tempArr[index].review.push({
      description: document.getElementById(`content${index}`).value,
      name: props.user.username,
    });
    document.getElementById(`content${index}`).value = "";
    setapprovedObj(tempArr);
    localStorage.setItem("approvedContent", JSON.stringify(tempArr));
  }
  function readMoreClick(index) {
    // console.log(index, document.getElementById(`readMore${index}`));
    if (document.getElementById(`readMore${index}`).innerText == "Read More") {
      document.getElementById(`card-text${index}`).style.maxHeight = "none";
      document.getElementById(`card-text${index}`).style.overflow = "none";
      document.getElementById(`readMore${index}`).innerText = "Read Less";
    } else {
      document.getElementById(`card-text${index}`).style.maxHeight = "100px";
      document.getElementById(`card-text${index}`).style.overflow = "hidden";
      document.getElementById(`readMore${index}`).innerText = "Read More";
    }
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
      {approvedObj.length ? (
        approvedObj.map((element, index) => {
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
                <p
                  className="card-text"
                  id={`card-text${index}`}
                  style={{ maxHeight: "100px", overflow: "hidden" }}
                >
                  {element.description}
                </p>
                <p>
                  ...
                  <a
                    href="#"
                    id={`readMore${index}`}
                    onClick={() => readMoreClick(index)}
                  >
                    Read More
                  </a>
                </p>
                <div className="reviews">
                  Reviews:
                  <ul style={{ paddingLeft: "15px" }}>
                    {element.review.map((element1, index1) => {
                      return (
                        <li key={index1}>
                          {element1.description} - By {element1.name}
                        </li>
                      );
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
                    onClick={() => addReview(index)}
                  >
                    Add Review
                  </button>
                </div>
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
