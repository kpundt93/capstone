import React from 'react'
import { Link } from 'react-router-dom'
import PlaceholderImg from '../img/generic-recipe.jpg'

export default function RecipeList({ recipes }) {
  return (
    <div className='recipe-list'>
      {recipes.length === 0 && <p>You haven't added any recipes yet!</p>}
      {recipes.map(recipe => (
        <div key={recipe.id} className='recipe-card'>
          <h4>{recipe.title}</h4>
          <img id='recipe-img' src={PlaceholderImg} alt='a plate of food' />
          <p>Cook time: {recipe.cookTime}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Category: {recipe.category}</p>
          <Link to={`/recipes/${recipe.id}`}>Details</Link>
        </div>
      ))}
    </div>
  )
}
