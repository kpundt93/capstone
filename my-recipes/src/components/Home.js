import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'
import filterCategory from './FilterCategory'
// components
import RecipeList from './RecipeList'

export default function Home() {
  // need to do something with the uid when rendering recipe cards to only show recipes belong to the currently logged in.
  const { user } = useAuthContext();
  const { documents, error, currentFilter } = useCollection(
    'recipes', 
    ['uid', '==', user.uid],
    ['createdAt', 'desc'],

    );

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
    <React.Fragment>
      <h2>Home</h2>
      <div>
        {error && <p>{error}</p>}
        {documents && <RecipeList recipes={recipes} />}
      </div>
    </React.Fragment>
  )
}
