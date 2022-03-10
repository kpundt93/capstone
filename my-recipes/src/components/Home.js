import React from 'react'
import { useState } from 'react'
import { useCollection } from '../hooks/useCollection'
// components
import RecipeList from './RecipeList'
import FilterCategory from './FilterCategory'
import SearchBar from './SearchBar'
// styles
import './Home.css'

export default function Home() {
  const { documents, error } = useCollection('recipes');
  const [currentFilter, setCurrentFilter] = useState('all');

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  }

  const recipes = documents ? documents.filter((document) => {
    switch(currentFilter) {
      case 'All':
        return true;
      case 'Breakfast':
      case 'Lunch':
      case 'Dinner':
      case 'Snacks':
      case 'Appetizers':
      case 'Sweets':
      case 'Holiday':
      case 'Soups':
        return document.category === currentFilter;
      default:
        return true;
    }
  }) : null;

  return (
    <React.Fragment>
      <div>
        {error && <p>{error}</p>}
        {documents && (
          <FilterCategory currentFilter={currentFilter} changeFilter={changeFilter} />
        )}
        {documents && <SearchBar />}
        {documents && <RecipeList recipes={recipes} />}
      </div>
    </React.Fragment>
  )
}
