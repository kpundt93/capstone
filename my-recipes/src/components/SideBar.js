import React from 'react'
import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'
// components
import SearchBar from './SearchBar'
import FilterCategory from './FilterCategory'
// styles
import './SideBar.css'

export default function SideBar() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'recipes', 
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
    );

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
    console.log(newFilter);
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <p>Side bar content goes here</p>
        <SearchBar />
        {documents && (
          <FilterCategory currentFilter={currentFilter} changeFilter={changeFilter} />
        )}
      </div>
    </div>
  )
}
