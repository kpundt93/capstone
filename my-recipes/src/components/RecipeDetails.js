import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../firebase-config'

export default function RecipeDetails({ recipe }) {
  return (
    <div className='recipe-details'>
      <h2>{recipe.title}</h2>
    </div>
  )
}
