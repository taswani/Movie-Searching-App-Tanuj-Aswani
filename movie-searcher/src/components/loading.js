import React from "react"; //Importing react and component for the app.
import SearchResultsNotFound from "./searchResultsNotFound";

const Loading = props => {
  let final;
  if (props.response === "false") {
    final = <SearchResultsNotFound />;
  } else {
    final = <p>Loading...</p>;
  }
  return <div className="container-fluid">{final}</div>;
};

export default Loading;
