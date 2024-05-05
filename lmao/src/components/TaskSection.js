import React from 'react'
import '../index.css';
import styles from '../style';
import TaskCard from './TaskCard';
import AddTask from './AddTask';
import TaskDone from './TaskDone';
import AddTaskDetails from './AddTaskDetails';

const TaskSection = () => {
  return (
    <section className="task-section">
        <div className={`${styles.paddiingX} paddingX`}>
            <div className='container'>
              <div className='task-wrapper'>
                <AddTask/>
                <AddTaskDetails/>
                <div className='todo-wrapper'>
                  <text className={`${styles.Body} text-style-body-caps`}>TO DO</text>
                  <TaskCard/>
                </div>

                <div className='done-wrapper'>
                  <text className={`${styles.Body} text-style-body-caps`}>DONE</text>
                  <TaskDone/>
                </div>
                
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default TaskSection