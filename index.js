const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :response-time'))

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => {console.log(err);})

app.use("/users", require("./routes/users"));

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
