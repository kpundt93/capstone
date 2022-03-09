import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFirestore } from '../hooks/useFirestore'
// components
import RecipeList from './RecipeList'

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, isPending, searchResults } = useFirestore('recipes');

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {searchResults && <RecipeList recipes={searchResults} />}
    </div>
  )
}