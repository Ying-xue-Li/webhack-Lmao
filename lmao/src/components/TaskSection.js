import React from 'react'
import '../index.css';
import styles from '../style';
import TaskCard from './TaskCard';
import AddTask from './AddTask';

const TaskSection = () => {
  return (
    <section className="task-section">
        <div className={`${styles.paddiingX}`}>
            <div className='container'>
                <TaskCard/>
                <TaskCard/>
                <AddTask/>
            </div>
        </div>
        
    </section>
  )
}

export default TaskSection