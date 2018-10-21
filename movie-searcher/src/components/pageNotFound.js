import React from "react"; //Importing react and component for the app.

//simple not found component.
const PageNotFound = props => {
  return (
    <div className="container-fluid">
      <p style={{ color: "white", marginTop: "100px" }}>
        This page does not exist!
      </p>
    </div>
  );
};

export default PageNotFound;
