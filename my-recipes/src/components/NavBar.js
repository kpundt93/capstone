import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
// styles
import './NavBar.css'

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/create'>Create Recipe</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><button className='btn' onClick={logout}>Logout</button></li>
      </ul>
    </div>
  )
}
