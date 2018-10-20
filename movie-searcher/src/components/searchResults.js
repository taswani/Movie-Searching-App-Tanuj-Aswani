import React from "react"; //Importing react and component for the app.
import SearchResultsFound from "./searchResultsFound";
import Loading from "./loading";

const SearchResults = props => {
  let display;
  if (props.loading === true) {
    display = <Loading response={props.response} />;
  } else {
    display = (
      <SearchResultsFound
        loading={props.loading}
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

  return <div>{display}</div>;
};

export default SearchResults;
