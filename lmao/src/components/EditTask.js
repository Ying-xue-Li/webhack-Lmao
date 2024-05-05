import React, {useState} from 'react'

export const EditTask = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-field" placeholder='Update task' />
    <button type="submit" className='secondary-button'>Done</button>
  </form>
  )
}