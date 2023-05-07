const BlogModel = require("../model/BlogModel");

async function getBlogs(req, res) {
  try {
    let Blogs = await BlogModel.find();
    res.json(Blogs);
  } catch (error) {
    res.end(error.message);
  }
}

async function getBollywood(req, res) {
  try {
    let Bolly = await BlogModel.find({ category: "bollywood" });
    res.json(Bolly);
  } catch (error) {
    res.end(error.message);
  }
}

async function getHollywood(req, res) {
  try {
    let Holly = await BlogModel.find({ category: "hollywood" });
    res.json(Holly);
  } catch (error) {
    res.end(error.message);
  }
}

async function getTechnology(req, res) {
  try {
    let Tech = await BlogModel.find({ category: "technology" });
    res.json(Tech);
  } catch (error) {
    res.end(error.message);
  }
}

async function getFood(req, res) {
  try {
    let Food = await BlogModel.find({ category: "food" });
    res.json(Food);
  } catch (error) {
    res.end(error.message);
  }
}

async function getFitness(req, res) {
  try {
    let Fitness = await BlogModel.find({ category: "fitness" });
    res.json(Fitness);
  } catch (error) {
    res.end(error.message);
  }
}

module.exports = {
  getBlogs,
  getBollywood,
  getHollywood,
  getTechnology,
  getFood,
  getFitness,
};
