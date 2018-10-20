const mongoose = require("mongoose"); //MongoDB requirement
const { Schema } = mongoose; //To create schemas from mongoose

//Search Model
const SearchSchema = new Schema({
  text: String
});

const Search = mongoose.model("Search", SearchSchema);

module.exports.Search = Search;
