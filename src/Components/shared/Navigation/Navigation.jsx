import React from 'react'
import { Link } from 'react-router-dom'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faHand} from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  return (
    <nav>
      
        
          <h1><Link to='/'><FontAwesomeIcon icon={faHand}></FontAwesomeIcon>hello</Link></h1>
         
    </nav>
  )
}

export default Navigation