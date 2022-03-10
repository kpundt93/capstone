import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase-config'
import { Link } from 'react-router-dom'
// styles
import './RecipeDetails.css'
// images
import PlaceholderImg from '../img/generic-recipe.jpg'

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [docToEdit, setDocToEdit] = useState("");


  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false);
        setRecipe(doc.data());
        setDocToEdit(doc.id);
      } else {
        setIsPending(false);
        setError('Could not find that recipe.');
      }
    });

    return () => unsub();

  }, [id]);

  return (
    <div className="recipe-details">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h3>{recipe.title}</h3>
          <img src={PlaceholderImg} alt="a plate of food" />
          <p><strong>Cook Time:</strong>  {recipe.cookTime}</p>
          <p><strong>Servings:</strong>  {recipe.servings}</p>
          <p><strong>Category:</strong>  {recipe.category}</p>
          <p><strong>Ingredients:</strong> </p>
            <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
          <p><strong>Instructions:</strong>  <br />
            {recipe.instructions}
          </p>
          <p id='notes'><strong>Notes:</strong>  <br />
            {recipe.notes}
          </p>
          <Link to={`/edit/${docToEdit}`} className="edit-link">Edit</Link>
        </>
      )}
    </div>
  )
}