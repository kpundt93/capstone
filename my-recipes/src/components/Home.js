import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'
// components
import RecipeList from './RecipeList'

export default function Home() {
  // need to do something with the uid when rendering recipe cards to only show recipes belong to the currently logged in.
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    'recipes', 
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
    );
  const recipes = documents;

  return (
    <React.Fragment>
      <h2>Home</h2>
      <div>
        {error && <p>{error}</p>}
        {recipes && <RecipeList recipes={recipes} />}
      </div>
    </React.Fragment>
  )
}
