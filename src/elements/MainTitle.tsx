import React from 'react'
import styles from './elements.module.css';

function MainTitle() {
  return (

    <div id={styles.TitleContainer} className="d-flex flex-column  justify-content-evenly col-6">
        
        <span id={styles.TitleMain} className="d-flex justify-content-center col-12">AniTunes</span>
        <div id={styles.SubtitleMain} className='d-flex flex-column align-items-center col-12'>
            <span id={styles.Your}> Your </span>
            <span id={styles.Music}>Musical </span>
            <span id={styles.Destiny}>Destiny</span>
        </div>
      
    </div>
  )
}

export default MainTitle