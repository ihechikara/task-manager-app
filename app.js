const express = require("express");
const app = express();
const tasks = require("./routes/tasks")

const connectDB = require("./db/connect")
require("dotenv").config()

const notFound = require("./middleware/not-found")

//port
const port = process.env.PORT || 3000;

// middleware
app.use(express.static("./public"))
app.use(express.json())
app.use(notFound)

// routes
app.use("/api/v1/tasks", tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_STRING)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error)
  }
}

start()