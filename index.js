const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const { errorHandler } = require("./handlers/errorHandler");
const { routeHandler } = require("./handlers/routeHandler");
const cors = require("cors");
const { initializeDBConnection } = require("./db/db.connect");
const campaign = require("./routes/campaign.router.js");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors())
initializeDBConnection();


app.use('/campaign', campaign);

console.log("hii1");
app.get('/', (req, res) => {
  console.log("hii2");
  res.send('Hello Express app!')
});

//route handler
app.use(routeHandler);

//error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('server started');
});