import React, {useState} from 'react'
import '../index.css';

export const AddTask = ({addTodo}) => {
  const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="card-task-details">
      <div className='text-style-footnote'>
          Add a task
      </div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-field" placeholder='Add your task here' />
      <button type="submit" className='secondary-button'>Add task</button>
    </form>
  )
}

export default AddTask