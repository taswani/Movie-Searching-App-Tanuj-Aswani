//Modules
import React, { Component } from "react";
import axios from "axios";

//Components
import SearchBar from "./components/searchBar";
import SearchArea from "./components/searchArea";
import TopResults from "./components/topResults";
import { apiKey, yApiKey } from "./config";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posterTitle: "",
      posterYear: "",
      posterLink: "",
      moviePlot: "",
      query: ["batman"],
      rSource: "",
      rValue: "",
      videoID: "",
      videoTitle: "",
      response: "",
      loading: true
    };
  }

  searchOMDB = query => {
    this.setState({
      loading: true,
      response: "false"
    });
    return axios
      .get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${query}&type=movie`)
      .then(response => {
        let posterT = response.data.Title;
        let posterY = response.data.Year;
        let posterI = response.data.Poster;
        let res = response.data.Response;
        let posterRS = response.data.Ratings[0].Source;
        let posterRV = response.data.Ratings[0].Value;
        let videoP = response.data.Plot;
        this.state.query.push(posterT);
        this.setState({
          posterTitle: posterT,
          posterYear: posterY,
          posterLink: posterI,
          moviePlot: videoP,
          rSource: posterRS,
          rValue: posterRV,
          response: res
        });
        return axios
          .get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${
              this.state.posterTitle
            }+${this.state.posterYear}+official+trailer&key=${yApiKey}`
          )
          .then(response => {
            let embedID = response.data.items[0].id.videoId;
            let embedTitle = response.data.items[0].snippet.title;
            if (this.state.response === "false") {
              embedID = "";
            }
            this.setState({
              videoID: embedID,
              videoTitle: embedTitle,
              loading: false
            });
          })
          .catch(error => {
            console.log("Error with fetching data", error);
          });
      })
      .catch(error => {
        console.log("Error with fetching data", error);
      });
  };

  componentDidMount() {
    this.searchOMDB(this.state.query);
  }

  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Movie Searcher</h1>
        <p style={{ color: "white" }}>
          An app for the info you need before you watch a movie!
        </p>
        <div className="row">
          <div className="jumbotron main my-5 mx-auto col-md bg-light">
            <SearchBar search={this.searchOMDB} />
            <SearchArea
              response={this.state.response}
              title={this.state.posterTitle}
              picture={this.state.posterLink}
              source={this.state.rSource}
              plot={this.state.moviePlot}
              rating={this.state.rValue}
              embedID={this.state.videoID}
              embedTitle={this.state.videoTitle}
              loading={this.state.loading}
            />
          </div>
          <div className="jumbotron main-second my-5 mx-auto col-md bg-info text-white">
            <TopResults />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
