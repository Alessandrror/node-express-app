const app = require('./app.js');
const connectDB = require('./db.js');

const port = 1234;

connectDB();

app.listen(port);
console.log(`Server on port ${port}`);