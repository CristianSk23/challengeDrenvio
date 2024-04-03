const express = require("express");
const initDb = require("./config/db.js");
const router = require("./routes/index.js");
const app = express();

app.use(router);
app.listen(3001, () => {
  console.log(`Server listening on port 3001`);
});
initDb();
