const app = require('./app.js')

require('dotenv').config()
const PORT = process.env.PORT || 3300;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});