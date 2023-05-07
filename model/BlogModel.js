const mongoose = require("mongoose");

let dblink = process.env.DB_LINK||require("../secrets").DB_LINK;

mongoose
  .connect(dblink)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

let blogSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "id is missing"],
    unique: [true, "id already exists"],
  },
  release: {
    type: String,
    required: [true, "Enter the Release Date"],
  },
  imdb: {
    type: String,
    required: [true, "Enter the imdb"],
  },
  category: {
    type: String,
    required: [true, "Enter the imdb"],
  },
  //   confirmpassword: {
  //     type: String,
  //     required: [true, "Enter the password again"],
  //     validate: {
  //       validator: function () {
  //         return this.password == this.confirmpassword;
  //       },
  //       message: "Password mismatch",
  //     },
  //   },
  Dname: {
    type: String,
    required: [true, "Email is missing"],
  },
  avatar: {
    type: "String",
  },
  //   phonenumber: {
  //     type: "String",
  //     minLength: [10, "Minimum length is 10"],
  //     maxLength: [10, "Maximum length is 10"],
  //   },
  image: {
    type: "String",
  },
  //   otpExpiry: {
  //     type: Date,
  //   },
  name: {
    type: String,
  },
  content: {
    type: String,
  },
});

const BlogModel = mongoose.model("BlogModel", blogSchema);
module.exports = BlogModel;
