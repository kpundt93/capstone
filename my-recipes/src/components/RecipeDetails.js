import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase-config'

export default function Recipe() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false);
        setRecipe(doc.data());
      } else {
        setIsPending(false);
        setError('Could not find that recipe.');
      }
    });

    return () => unsub();

  }, [id]);

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2>{recipe.title}</h2>
          <p>Cook Time: {recipe.cookTime}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Category: {recipe.category}</p>
          <p>Ingredients:
            <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
          </p>
          <p>Instructions:
            <p>{recipe.instructions}</p>
          </p>
          <p>Notes:
            <p>{recipe.notes}</p>
          </p>
        </>
      )}
    </div>
  )
}