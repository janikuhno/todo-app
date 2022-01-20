const express = require('express');
const app = express();
const cors = require('cors');

// port number either defined or from env
const PORT = 5001;

// middleware
app.use(cors());
app.use(express.json());

app.use('/authentication', require('./routes/jwtAuth'));
app.use('/dashboard', require('./routes/todoDashboard'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
