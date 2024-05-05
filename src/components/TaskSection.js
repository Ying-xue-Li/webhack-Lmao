import React, { useState } from "react";
import '../index.css';
import { Todo } from "./Todo";
import styles from '../style';
import TaskCard from './TaskCard';
import AddTask from './AddTask';
import TaskDone from './TaskDone';
import { v4 as uuidv4 } from "uuid";
import { EditTask } from "./EditTask";

const TaskSection = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <section className="task-section">
      <div className={`${styles.paddiingX} paddingX`}>
        <div className='container'>
          <div className='task-wrapper'>
            <AddTask addTodo={addTodo} />
            {/* display todos */}
            {todos.map((todo) =>
            todo.isEditing ? (
            <EditTask editTodo={editTask} task={todo} />
            ) : (
            <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />
            )
          )}
          </div>
        </div>
      </div>
        
    </section>
  )
}

export default TaskSection