const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// port number either defined or from env
const PORT = 5001;

// middleware
app.use(cors());
app.use(express.json());

// routes
// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES($1)',
      [description]
    );

    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});
// get all todos
// get a todo
// update a todo
// delete a todo

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
