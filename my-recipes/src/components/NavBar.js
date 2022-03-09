import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
// styles
import './NavBar.css'

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className='navbar'>
      <ul>
        {/* only show these links if a user is not logged in */}
        {!user && (
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
          </>
        )}
        {/* only show these if a user is logged in */}
        {user && (
          <>
            <li><button className='btn' onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </div>
  )
}
