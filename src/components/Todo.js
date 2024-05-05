import React from 'react'
import {del, edit} from '../assets';

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="card-container">
        <text className={`${task.completed ? "completed" : "incompleted"} text-style-footnote`} onClick={() => toggleComplete(task.id)}>{task.task}</text>
        <div className='task-icon-wrapper'>
          <img className="edit-icon" src={edit} alt='edit' onClick={() => editTodo(task.id)}/>
          <img className="delete-icon" src={del} alt='delete' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}