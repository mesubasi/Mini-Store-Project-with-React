import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1 style={{ color: "red", textAlign: "Center" }}>404 Not Found</h1>
      <Link
        to="/"
        className="btn btn-info"
        style={{
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          width: "20%",
          height: "40%",
        }}
      >
        Click to go to the homepage
      </Link>
    </>
  );
}

export default PageNotFound;
