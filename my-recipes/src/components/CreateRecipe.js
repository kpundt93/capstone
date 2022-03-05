import React from 'react'
// components
import ReusableForm from './ReusableForm'

export default function CreateRecipe(props) {
  return (
    <div className='create'>
      <h2>Add a New Recipe</h2>
      <ReusableForm />
    </div>
  )
}
