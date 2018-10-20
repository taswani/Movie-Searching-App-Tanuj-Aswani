import React, { Component } from "react"; //Importing react and component for the app.
import axios from "axios";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      query: ""
    };
  }

  //Grabs input upon change and updates state accordingly.
  handleChange = e => {
    this.setState({ search: e.target.value });
    this.setState({ query: e.target.value });
  };

  //Handles submit by sending the search text to the function search from app.js.
  submit = e => {
    e.preventDefault();
    this.props.search(this.state.search);
    e.currentTarget.reset();
    return axios.post("http://localhost:5000/api/searches", {
      text: this.state.query
    });
  };

  render() {
    return (
      <div>
        <form
          className="form-inline d-inline-block mx-auto my-auto"
          onSubmit={this.submit}
        >
          <div className="form-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Type movie here..."
              style={{ width: "500px" }}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
