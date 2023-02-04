import React from 'react'
import styles from '../elements/elements.module.css';
export default function Headerlist() {
  return (
    <nav id={styles.navbarbutton} className="d-flex  justify-content-center">
      <button id={styles.butheader} className="">Home</button>
      <button id={styles.butheader} className="">Songs</button>
      <button id={styles.loginbutton} className="">Login</button>
    </nav>
  )
}
