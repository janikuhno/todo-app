import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="jumbotron mt-5">
      <h1>Todo App</h1>
      <p>Log in or register to access your personal todo list!</p>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary ml-3">
        Register
      </Link>
    </div>
  );
};

export default Landing;
