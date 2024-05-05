import React from 'react'
import '../index.css';
import {cross} from '../assets';

const AddTaskDetails = () => {
  return (
    <div className='card-task-details'>
        <div className='card-task-details-title'>
            Add task
            <img src={cross} alt='cross'/>
        </div>
        <div>

        </div>
        <button className='completion-button'>
            Add task
        </button>
    </div>
  )
}

export default AddTaskDetails