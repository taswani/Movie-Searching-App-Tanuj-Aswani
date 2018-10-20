import React from "react"; //Importing react and component for the app.
import SearchFoundAndLoaded from "./searchFoundAndLoaded";
import SearchResultsNotFound from "./searchResultsNotFound";

const SearchResultsFound = props => {
  let load;
  if (props.response === "false") {
    load = <SearchResultsNotFound />;
  } else {
    load = (
      <SearchFoundAndLoaded
        response={props.response}
        title={props.title}
        poster={props.poster}
        source={props.source}
        plot={props.plot}
        rating={props.rating}
        videoID={props.videoID}
        videoTitle={props.videoTitle}
      />
    );
  }
  return <div>{load}</div>;
};

export default SearchResultsFound;
