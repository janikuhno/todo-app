import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// components
import InputTodo from './todolist/InputTodo';
import ListTodos from './todolist/ListTodos';

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState('');
  const [allTodos, setAllTodos] = useState([]);
  // whenever something changes runs useEffect and refresh
  const [todosChange, setTodosChange] = useState(false);

  const getName = async () => {
    try {
      const response = await fetch('/dashboard', {
        method: 'GET',
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await response.json();

      setAllTodos(parseRes);

      setName(parseRes[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      setAuth(false);
      toast.success('Logged out!');
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getName();
    setTodosChange(false);
  }, [todosChange]);

  return (
    <div>
      <div className="d-flex mt-5 justify-content-around">
        <h2>{name}'s Todo List</h2>
        <button className="btn btn-primary" onClick={(e) => logout(e)}>
          Logout
        </button>
      </div>

      <InputTodo setTodosChange={setTodosChange} />
      <ListTodos allTodos={allTodos} setTodosChange={setTodosChange} />
    </div>
  );
};

export default Dashboard;
