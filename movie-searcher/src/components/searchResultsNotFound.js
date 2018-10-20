import React from "react"; //Importing react and component for the app.

const SearchResultsNotFound = props => {
  return (
    <div className="container-fluid">
      <p>No movies matched the search. Try searching again!</p>
    </div>
  );
};

export default SearchResultsNotFound;
