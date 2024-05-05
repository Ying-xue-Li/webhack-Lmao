import React from 'react'
import '../index.css';
import './TaskCard.css';
import styles from '../style';

const TaskCard = () => {
  return (
    <section className="task-section">
        <div className={`${styles.paddiingX}`}>
            <div className='container'>

                <div className='card-container'>
                    <div className='text-style-footnote'>
                        Bus
                    </div>
                    <button className='secondary-button'>
                        Start
                    </button>
                </div>

                <div className='card-container'>
                    <div className='text-style-footnote'>
                        Bus
                    </div>
                    <button className='secondary-button'>
                        Start
                    </button>
                </div>
            </div>
        </div>
        
    </section>
    
  )
}

export default TaskCard