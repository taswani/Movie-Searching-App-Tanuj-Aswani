# Movie-Searching-App-Tanuj-Aswani

A simple MERN app that aggregates data and a video trailer of the movie that is searched.

## Getting Started

In order to get started, you will need a few things. The first thing you will need is to have node, npm, and mongoDB installed.

### Prerequisites

Once those are installed do the following:

```
npm install
```

```
npm run client-install
```

Then you will need to acquire a YouTube Data API key, along with a OMDB Api key. Once those are acquired, put them in a file named config.js and put that file in the src folder in movie-searcher. The `apiKey` variable will hold the OMDB key and the `yApiKey` will hold the youtube key.

For example:

```
export const apiKey = "your api key here",
  yApiKey = "your api key here";
```

Then in two separate terminals,

```
mongod
```

```
npm start
```

The database will start off with no data in it, so the Top Searches section of the app will remain unpopulated till after a few searches have been made.
