import React from "react"; //Importing react and component for the app.
import SearchResultsNotFound from "./searchResultsNotFound";

//Loading component set up to not clash with search results not found.
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
