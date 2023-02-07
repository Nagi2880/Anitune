import React from 'react'
import MainTitle from '../elements/MainTitle';
import styles from './components.module.css';
export default function MainHome() {
  return (
    <main id={styles.mainContainer} className="d-flex col-12">
      <MainTitle />
    </main>
  )
}
