import React from 'react'
import styles from '../style';
import '../index.css';

const Hero = () => {
  return (
    <section className="w-full">
      <div className={`${styles.paddingX}`}> 
      <button className='primary-button'>
                    Click to hear purring
                </button>                                                   {/* padding-global */} 
        <div className='container'>                                                       {/* container */} 
            <div className='hero-wrapper'>                                                      {/* hero_wrapper */} 
                <div className='hero-content-wrapper'>
                    <h1 
                    className={`${styles.H1} heading-style-h1 text-center`}>
                    Deadline
                    </h1>
                    <text className={`${styles.Body} text-style-body`}>
                        Stay on top of your tasks, effortlessly manage your study time and boost your productivity with our purring cat!
                    </text>
                </div>
                
                

            </div> 

            
          
        </div>

      </div>

    </section>
  )
}

export default Hero