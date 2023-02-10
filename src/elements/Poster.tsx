import React from 'react'
import styles from './elements.module.css';
export default function Poster() {
  return (
    <div id={styles.PosterContainer} className="d-flex flex-column col-6">
            <div id={styles.TextContainer}>
              <span> 
                Explora la mejor música de anime, encuentra tu OST favorita y vive la experiencia musical más épica
              </span>
            </div>
            <div id={styles.ImageSat}>
              <img src='' alt='' />
            </div>
    </div>
  )
}
