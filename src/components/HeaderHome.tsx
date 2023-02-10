import React from 'react'
import Headerlist from '../elements/Headerlist';
import styles from './components.module.css';
export default function HeaderMain() {
  return (
    
       <header id={styles.headerContainer} className="d-flex  col-12 align-items-center justify-content-between" >       
          <nav id={styles.navlogo}>
            Anitunes
          </nav>
          <Headerlist />
      </header>

  )
}
