const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use('/authentication', require('./routes/jwtAuth'));
app.use('/dashboard', require('./routes/todoDashboard'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
