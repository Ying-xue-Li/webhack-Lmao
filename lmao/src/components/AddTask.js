import React from 'react'
import '../index.css';
import {add} from '../assets';

const AddTask = () => {
  return (
    <button className='add-task-button'>
        <div className='add-task-wrapper'>
            <img src={add} alt="add button" />
            <div className='text-style-footnote'>
                Add task
            </div>
        </div>
        
    </button>
  )
}

export default AddTask