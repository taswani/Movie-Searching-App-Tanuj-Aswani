import React, { Component } from "react"; //Importing react and component for the app.
import axios from "axios";

class TopResults extends Component {
  constructor() {
    super();
    this.state = {
      searches: [],
      load: true
    };
  }

  getData = () => {
    return axios
      .get("/api/searches/")
      .then(response => {
        console.log(response);
        this.state.searches.push(response.data[0]._id);
        this.state.searches.push(response.data[1]._id);
        this.state.searches.push(response.data[2]._id);
        this.state.searches.push(response.data[3]._id);
        this.state.searches.push(response.data[4]._id);
        this.setState({
          load: false
        });
      })
      .catch(error => {
        console.log("Error with fetching data", error);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Top Searches!</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td> {this.state.searches[0]} </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td> {this.state.searches[1]} </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td> {this.state.searches[2]} </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td> {this.state.searches[3]} </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td> {this.state.searches[4]} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopResults;
