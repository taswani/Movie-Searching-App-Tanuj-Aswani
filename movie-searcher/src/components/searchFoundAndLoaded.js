import React from "react"; //Importing react and component for the app.

const SearchFoundAndLoaded = props => {
  return (
    <div className="container-fluid row">
      <div className="col-md">
        <ul className="search-results my-4">
          <li className="mx-auto my-3">
            <img src={props.poster} alt={props.title} />

            <figcaption
              className="my-3"
              style={{ fontStyle: "italic", fontWeight: "bold" }}
            >
              {props.title}
            </figcaption>

            <figcaption className="my-3">
              {props.source} gives it a {props.rating}!
            </figcaption>
          </li>
        </ul>
      </div>
      <div className="container col-md my-5">
        <h3 style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Plot for {props.title}
        </h3>
        <p>{props.plot}</p>
        <iframe
          width="500"
          height="320"
          src={`https://www.youtube.com/embed/${props.videoID}`}
          title={props.videoTitle}
        />
        <figcaption className="my-3">{props.videoTitle}</figcaption>
      </div>
    </div>
  );
};

export default SearchFoundAndLoaded;
