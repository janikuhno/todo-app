--database
CREATE DATABASE todo_app_db;

--users
CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

--todos
CREATE TABLE todos(
  todo_id SERIAL,
  user_id UUID,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--test users data
insert into users (user_name, user_email, user_password) values ('Jani', 'jani@gmail.com', 'jmk071989');

--test todos data
insert into todos (user_id, description) values ('e2a319ba-9977-4bfc-bbc9-f835a1971342', 'finish todo app');