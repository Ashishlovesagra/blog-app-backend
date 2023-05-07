const express = require("express");
const app = express();
const Port = process.env.PORT||5001;
const cors = require("cors");
const route = require("./Routes/Routes");


app.get("/", (req, res) => {
    res.send(`server under ${Port}`);
})

app.use(cors({
    origin: "*"
})) 


app.use(route)

app.listen(Port, () => {
    console.log(`server running on port ${Port}`);
   
})