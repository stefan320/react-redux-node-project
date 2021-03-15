const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.use(express.json());

axios.defaults.baseURL = "https://restcountries.eu/rest/v2/";

app.post("/api", (req, res) => {
  const countries = req.body[0];
  axios
    .get(`/name/${countries}?fields=name`)
    .then((response) => {
      res.send(JSON.stringify(response.data[0]));
    })
    .catch((err) => console.log(err));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listenig at http://localhost:${port}`);
});
