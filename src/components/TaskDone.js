import React from 'react'
import '../index.css';
import {tick} from '../assets';

const TaskDone = () => {
  return (
    <div className='card-container'>
        <div className='text-style-footnote'>
            Users' task
        </div>
        <button className='completion-button'>
            {/*<img src={tick} alt='tick'/>*/}
            Done
        </button>
    </div>
  )
}

export default TaskDone