import React, { Component } from "react"; //Importing react and component for the app.
import SearchResults from "./searchResults";

//Component that pushes props down to search results.
class SearchArea extends Component {
  render() {
    return (
      <div>
        <SearchResults
          loading={this.props.loading}
          response={this.props.response}
          title={this.props.title}
          poster={this.props.picture}
          source={this.props.source}
          plot={this.props.plot}
          rating={this.props.rating}
          videoID={this.props.embedID}
          videoTitle={this.props.embedTitle}
        />
      </div>
    );
  }
}

export default SearchArea;
