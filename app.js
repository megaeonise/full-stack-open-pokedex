const express = require("express");
const app = express();

// get the port from env variable
console.log(process.env);
const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
