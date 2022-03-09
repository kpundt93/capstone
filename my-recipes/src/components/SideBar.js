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
  }

  const recipes = documents ? documents.filter((document) => {
    switch(currentFilter) {
      case 'breakfast':
      case 'lunch':
      case 'dinner':
      case 'snacks':
      case 'appetizers':
      case 'sweets':
      case 'holiday':
      case 'soups':
        console.log(document.category, currentFilter);
        return document.category === currentFilter;
      default:
        return true;
    }
  }) : null;

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
