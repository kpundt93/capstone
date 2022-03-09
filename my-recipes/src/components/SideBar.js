import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
// styles
import './SideBar.css'
// images
import HomeIcon from '../img/home-icon.svg'
import AddIcon from '../img/add-icon.svg'
import Logo from '../img/recipe-book-icon.svg'

export default function SideBar() {
  const { user } = useAuthContext();

  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <div className="logo">
          <img src={Logo} alt='recipe book logo' />
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to='/'>
                <img src={HomeIcon} alt='home icon' />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/create'>
                <img src={AddIcon} alt='add recipe icon' />
                <span>New Recipe</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
