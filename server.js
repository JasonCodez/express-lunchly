/** Start server for Lunchly. */
const PORT = 3000;
const app = require("./app");

app.listen(3000, function() {
  console.log(`Listening on port ${PORT}`);
});
