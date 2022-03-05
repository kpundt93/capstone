import React from 'react'
import { Link } from 'react-router-dom'
// styles
import './NavBar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/create'>Create Recipe</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><button className='btn'>Logout</button></li>
      </ul>
    </div>
  )
}
