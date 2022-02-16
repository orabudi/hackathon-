const express = require("express");
import Logger from "./utils/logger";
import logMiddleware from "./utils/loggerMidlleware";

const app = express();
const port = 3000; // default port to listen

app.use(cors());
app.use(logMiddleware);

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  return Logger.info(`Express is listening at http://localhost:${port}`);
});
