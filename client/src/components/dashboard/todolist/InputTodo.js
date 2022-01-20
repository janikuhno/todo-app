import React, { Fragment, useState } from 'react';

const InputTodo = ({ setTodosChange }) => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = { description };
      const response = await fetch('http://localhost:5001/dashboard/todos', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      // eslint-disable-next-line no-unused-vars
      const parseRes = await response.json();

      setTodosChange(true);
      setDescription('');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Add Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
