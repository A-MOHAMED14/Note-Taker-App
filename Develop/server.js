const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
