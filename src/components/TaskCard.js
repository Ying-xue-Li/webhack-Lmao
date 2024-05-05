import React from 'react'
import '../index.css';

const TaskCard = () => {
  return (
    <div className='card-container'>
        <div className='text-style-footnote'>
            Users' task
        </div>
        <button className='secondary-button'>
            Start
        </button>
    </div>
  )
}

export default TaskCard