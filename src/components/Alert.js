import React from "react";

export default function Alert(props) {
  return (
    <div
      style={{ position: "absolute", width: "100%", zIndex: "1", top: "50px" }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type == "success" ? "Success! " : ""}</strong>
          {props.alert.msg}
          {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
        </div>
      )}
    </div>
  );
}
