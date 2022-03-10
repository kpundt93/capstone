import React from 'react'
import { Link } from 'react-router-dom'
import PlaceholderImg from '../img/generic-recipe.jpg'
import { projectFirestore } from '../firebase-config'
// styles
import './RecipeList.css'
// images
import DeleteIcon from '../img/delete-icon.svg'

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No recipes found...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  }

  return (
    <div className='recipe-list'>
      {recipes.length === 0 && <p>You haven't added any recipes yet!</p>}
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>
          <h4>{recipe.title}</h4>
          <img className='recipe-img' src={PlaceholderImg} alt='a plate of food' />
          <p><strong>Cook time:</strong> {recipe.cookTime}</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Category:</strong> {recipe.category}</p>
          <Link to={`/recipes/${recipe.id}`}>Details</Link>
          <img src={DeleteIcon} className='delete' onClick={() => handleClick(recipe.id)} />
        </div>
      ))}
    </div>
  )
}
