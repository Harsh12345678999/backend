const express = require("express");
const app = express();
app.use(express.json());

// import router
const product = require("./routers/productRouter");
app.use("/api/v1", product);

// middleware error
const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);

// default route
app.get("/", (req, res) => {
  res.status(200).json({ message: 'Hello from the backend!' });
});

module.exports = app;
