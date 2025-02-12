const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api", todoRoutes);


// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/todo-app")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
