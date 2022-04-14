import React from 'react'
import {Link} from 'react-router-dom'

import mediton from '../assets/mediton.png'

const Navbar =() => {
  return (
    <>   
    <header className='header'>
     
      <div> 
      <img src={mediton} alt='Brand Logo'/>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' to='/'>Home</Link>
          <Link className='links' to='/login'>Login</Link>
          <Link className='links' to='/signup'>Sign Up</Link>
        </ul>
      </nav>

    </header>
    </>
  )
}

export default Navbar
