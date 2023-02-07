import React from 'react'
import styles from './elements.module.css';

function MainTitle() {
  return (

    <div id={styles.TitleContainer} className="d-flex flex-column justify-content-evenly col-6">
        
        <span id={styles.TitleMain} className="d-flex col-12">AniTunes</span>
        <div id={styles.SubtitleMain} className='d-flex flex-column col-12'>
            <span> Your </span>
            <span>Musical </span>
            <span>Destiny</span>
        </div>
        <span> Explora la mejor música de anime, encuentra tu OST favorita y vive la experiencia musical más épica</span>
    </div>
  )
}

export default MainTitle