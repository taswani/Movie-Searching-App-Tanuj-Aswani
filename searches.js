const express = require("express"); //Express
const router = express.Router(); //Router
const { Search } = require("./model"); //SearchSchema

//Get route for top searches.
router.get("/", function(req, res, next) {
  Search.aggregate(
    [
      { $group: { _id: "$text", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ],
    function(err, search) {
      if (err) console.log(err);
    }
  ).exec(function(err, search) {
    if (err) return next(err);
    //Database accuracy purposes
    //uncomment if you want to see the databases' contents
    //console.log(search);
    res.json(search);
  });
});

//Post route to create a search.
router.post("/", function(req, res, next) {
  Search.create(req.body, function(err, search) {
    if (err) return next(err);
  });
});

module.exports = router;
