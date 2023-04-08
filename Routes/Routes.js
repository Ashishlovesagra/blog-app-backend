const route = require("express").Router()
const data = require("../DummyData/DummyData")
const dataApi = require("../DummyData/Data")

route.get("/bollywood", data.bollywood);
// route.get("/bollywood/:id", data.bollywood);
route.get("/hollywood", data.hollywood);
route.get("/technology", data.technology);
route.get("/food", data.food);
route.get("/fitness", data.fitness);
route.get("/blogApi",dataApi.BlogApi);



module.exports = route;