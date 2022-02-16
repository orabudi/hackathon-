const express = require("express");
const winston = require("winston");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const crypto = require("crypto");

const app = express();
const port = 3000; // default port to listen

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.message}`)
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new winston.transports.File({ filename: "logs/all.log" }),
];

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

const stream = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const logMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

app.use(cors());
app.use(logMiddleware);

const usersData = fs.readFileSync(
  "C:\\Users\\or\\Desktop\\hackathon-banky\\Data\\Users.json",
  "utf8"
);
const registriesData = fs.readFileSync(
  "C:\\Users\\or\\Desktop\\hackathon-banky\\Data\\Regestries.json",
  "utf8"
);

const users = [...JSON.parse(usersData).Users];
const regestries = [...JSON.parse(registriesData).Regestries];

// app routes
// create new user
app.post("/users/register", (req, res) => {
  try {
    if (!req.query.username || !req.query.password || !req.query.type) {
      return res.status(400).send("BAD REQUEST");
    }
    const userName = req.query.username;
    const password = req.query.password;
    const type = req.query.type;
    const existingUser = users.find((user) => user.Name === userName);
    if (existingUser) {
      return res.status(400).send("USER ALREADY EXISTS WITH THAT USERNAME");
    }
    const id = crypto.randomBytes(4).toString("hex");
    newUser = { Id: id, Name: userName, Password: password, Type: type };
    users.push(newUser); // TODO: also write new user to file if I have time
    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

// get user
app.get("/users", (req, res) => {
  try {
    if (!req.query.username || !req.query.password) {
      return res.status(400).send("BAD REQUEST");
    }
    const userName = req.query.username;
    const password = req.query.password;
    const currUser = users.find(
      (user) => user.Name === userName && user.Password === password
    );
    return res.status(200).send(currUser);
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

// get all users
app.get("/users/all", (req, res) => {
  try {
    if (users) {
      return res.status(200).send(users);
    } else {
    }
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

// get all regestries
app.get("/registry/all", (req, res) => {
  try {
    if (regestries) {
      return res.status(200).send(regestries);
    }
    return res.status(200).send(null);
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

//get certain registry
app.get("/registry", (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send("REGISTRY DOES NOT EXIST");
    }
    const registry = regestries.find((reg) => reg.Name === req.query.name);
    if (registry) {
      return res.status(200).send(registry);
    }
    return res.status(200).send(null);
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

// empty certain registry
app.put("/registry", (req, res) => {
  try {
    if (!req.query.name) {
      return res.status(400).send("REGISTRY DOES NOT EXIST");
    }
    const registry = regestries.find((reg) => reg.Name === req.query.name);
    if (!registry) {
      return res.status(400).send("REGISTRY DOES NOT EXIST");
    }
    registry["Current Amount"] = 0; // TODO: add write to json file if i have time
    return res.status(200).send(registry);
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

// create registry
app.post("/registry", (req, res) => {
  try {
    const existingRegistry = regestries.find(
      (reg) => reg.Name === req.query.name
    );
    if (existingRegistry) {
      return res.status(400).send("REGESTRY ALREADY EXISTS");
    }
    const id = crypto.randomBytes(4).toString("hex");
    const newRegistry = {
      Name: req.query.name,
      Id: id,
      city: req.query.city || "Tel-Aviv",
      Address: req.query.address,
      Capacity: req.query.Capacity || 1000,
      "Current Amount": req.query.currAmount || 0,
      "Update date": "16.02.2022",
      "Last Collected": null,
    };
    regestries.push(newRegistry);
    return res.status(201).send(newRegistry);
  } catch (error) {
    return res.status(400).send("BAD REQUEST");
  }
});

// define a route handler for the default home page
app.get("/", (req, res) => {
  return res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  return Logger.info(`Express is listening at http://localhost:${port}`);
});

const nodeGeocoder = require("node-geocoder");
