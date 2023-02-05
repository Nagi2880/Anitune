import React from 'react';

import FoooterHome from '../components/FoooterHome';
import HeaderHome from '../components/HeaderHome';
import MainHome from '../components/MainHome';
import styles from './pages.module.css';

export default function Home() {
  return (
    <div id={styles.HomeContainer} className="d-flex flex-column align-items-center">
          <HeaderHome />
          <MainHome />
          <FoooterHome />
    </div>
  )
}
