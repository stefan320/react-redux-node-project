const express = require("express");
const cors = require("cors");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

let isAuthenticated = false;

axios.defaults.baseURL = "https://restcountries.eu/rest/v2/";

app.post("/api", (req, res) => {
  const [searchType, countries = "", isFullName] = [
    req.body.searchBy,
    req.body.country,
    req.body.isFullName ? "?fullText=true" : "?fullText=false",
  ];

  const generateRequestsArr = (searchType, countries, isFullName) => {
    // if countries is a string convert to an array
    countries = Array.isArray(countries) ? countries : [countries];
    const allRequests = [];
    let countryURL = "";

    // Build the url for api request for every country and store to the allRequests array
    countries.forEach((country) => {
      countryURL = `/${searchType}/${country}${isFullName}&fields=name`;
      allRequests.push(axios.get(countryURL));
    });

    return allRequests;
  };

  // calling generateRequestsArr will return an array of URLS which than axios will call
  axios
    .all(generateRequestsArr(searchType, countries, isFullName))
    .then((response) => {
      //Send back the responses in an array of objects
      res.send(response.flatMap((res) => res.data));
    })
    .catch((err) => console.log(err));
});

let token = "";
app.post("/users", (req, res) => {
  const userAccount = req.body.auth;
  token = jwt.sign(userAccount, "greenpeas", { noTimestamp: true });
  res.send(token);
});

let loginToken = "";
app.post("/login", (req, res) => {
  const userAccount = req.body.auth;
  loginToken = jwt.sign(userAccount, "greenpeas", { noTimestamp: true });
  // const decodeToken = jwt.verify(loginToken, "greenpeas");

  if (loginToken === token) {
    isAuthenticated = true;
    res.send("Login Succesful");
  } else {
    res.send("Invalid Username or Password");
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listenig at http://localhost:${port}`);
});
