const route = require("express").Router();
const {
  getBlogs,
  getBollywood,
  getHollywood,
  getTechnology,
  getFitness,
  getFood,
} = require("../controller/BlogController");

route.get("/bollywood", getBollywood);
route.get("/hollywood", getHollywood);
route.get("/technology", getTechnology);
route.get("/food", getFood);
route.get("/fitness", getFitness);
route.get("/blogApi", getBlogs);

module.exports = route;
