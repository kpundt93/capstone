import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <div key={recipe.id} className='recipe-card'>
          <h4>{recipe.title}</h4>
          <p>Cook time: {recipe.cookTime}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Category: {recipe.category}</p>
          <Link to={`/recipes/${recipe.id}`}>Details</Link>
        </div>
      ))}
    </div>
  )
}
