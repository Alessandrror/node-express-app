const app = require('./app.js');
const connectDB = require('./db.js');
const { SERVER_PORT } = require('./config.js');

const port = process.env.PORT ?? SERVER_PORT;

connectDB();

app.listen(port);
console.log(`Server running on port http://localhost:${port}`);