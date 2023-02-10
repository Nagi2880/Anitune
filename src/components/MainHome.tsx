import React from 'react'
import MainTitle from '../elements/MainTitle';
import styles from './components.module.css';
import Poster from '../elements/Poster';

export default function MainHome() {
  return (
    <main id={styles.mainContainer} className="d-flex col-12 align-items-center">
      <MainTitle />
      <Poster />
    </main>
  )
}
