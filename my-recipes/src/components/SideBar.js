import React from 'react'
// components
import SearchBar from './SearchBar'
// styles
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <p>Side bar content goes here</p>
        <SearchBar />
      </div>
    </div>
  )
}
