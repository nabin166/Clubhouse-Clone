import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import styles from './Navigation.module.css'

const Navigation = () => {
  const Brandstyle = {
    textDecoration:'none',
    
  }

  return (
    <nav className='container'>

      <Link to='/' style={Brandstyle} >
        <div className={styles.flex}>
          <img src="images/logo.png" alt="logo" />
          <span className={styles.spans}>Clubhouse</span>
        </div>
      </Link>

    </nav>
  )
}

export default Navigation