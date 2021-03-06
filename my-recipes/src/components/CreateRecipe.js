import React from 'react'
import { useState, useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'
import { useAuthContext } from '../hooks/useAuthContext'
import { timestamp } from '../firebase-config'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// styles
import './Form.css'
// images
import AddIcon from '../img/add_circle.svg'
import RemoveIcon from '../img/remove-icon.svg'

export default function CreateRecipe({ uid }) {
  const { addDocument, response } = useFirestore('recipes');
  const { user } = useAuthContext();
  const [imageError, setImageError] = useState(null);
  const [form, setForm] = useState({
    title: "",
    cookTime: "",
    servings: 0,
    category: "",
    ingredients: [],
    instructions: "",
    notes: "",
    uid: "",
    createdAt: "",
    image: null
  });

  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Appetizers",
    "Sweets",
    "Holiday",
    "Soups"
  ];
  
  const categoryOptions = categories.map((category) => {
    return (
      <option key={category} value={category}>{category}</option>
    );
  });

  const handleIngredient = (e, i) => {
    e.preventDefault();
    const ingredientsClone = [...form.ingredients];
    ingredientsClone[i] = e.target.value;
    setForm({
      ...form,
      ingredients: ingredientsClone
    });
  };

  const handleIngredientCount = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      ingredients: [...form.ingredients, ""]
    });
  };

  const handleRemoveIngredient = (e, i) => {
    e.preventDefault();
    const ingredientsClone = [...form.ingredients];
    console.log(ingredientsClone);
    const newIngredientsClone = ingredientsClone.splice(-1);
    console.log(newIngredientsClone);
    console.log(ingredientsClone);
    setForm({
      ...form,
      ingredients: ingredientsClone
    });
  };

  // const handleFileChange = (e) => {
  //   let selectedImg = e.target.files[0];

  //   if (!selectedImg.type.includes('image')) {
  //     setImageError('Selected file must be an image.');
  //     return;
  //   }

  //   if (selectedImg.size > 1000000) {
  //     setImageError('Image file size must be less than 1mb.');
  //     return;
  //   }

  //   setImageError(null);
  //   setForm({
  //     ...form,
  //     image: selectedImg
  //   });

  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    addDocument(form);
  };

  return (
    <div className="recipe-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='form-label'>Title</Form.Label>
          <Form.Control type='text' onChange={e => setForm({...form, title: e.target.value})} value={setForm.title} required />
        </Form.Group>

        <Row>
          <Col>
            <Form.Label className='form-label'>Cook Time</Form.Label>
            <Form.Control type='text' onChange={(e) => setForm({...form, cookTime: e.target.value})} required />
          </Col>

          <Col>
            <Form.Label className='form-label'>Servings</Form.Label>
            <Form.Control type='number' step='1' min='1' onChange={(e) => setForm({...form, servings: e.target.value})} required />
          </Col>
        </Row>

        <Form.Group>
          <Form.Label className='form-label'>Category</Form.Label>
          <Form.Select onChange={(e) => setForm({...form, category: e.target.value})}>
            <option>Choose a category</option>
            { categoryOptions }
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <br />
          <Form.Label className='form-label'>Ingredients</Form.Label>
          { 
            form.ingredients.map((ingredient, i) => (
            <Form.Control type="text" key={i} value={ingredient} onChange={(e) => handleIngredient(e, i)} />
            ))
          }
          <div id="ingredients-buttons">
            <button className='ingredient-btn' id='add' onClick={handleIngredientCount}><img src={AddIcon} alt='Add' />Add</button>
            <button className='ingredient-btn' id='remove' onClick={handleRemoveIngredient}><img src={RemoveIcon} alt='Remove' />Remove</button>
          </div>
          <br />
        </Form.Group>

        <Form.Group>
          <Form.Label className='form-label'>Instructions</Form.Label>
          <Form.Control type='text' as='textarea' rows={3} onChange={(e) => setForm({...form, instructions: e.target.value})} required />
        </Form.Group>

        <Form.Group>
          <Form.Label className='form-label'>Notes</Form.Label>
          <Form.Control type='text' as='textarea' rows={2} onChange={(e) => setForm({...form, notes: e.target.value})} />
        </Form.Group>
        
        {/* <Form.Group>
          <Form.Label className='form-label'>Image</Form.Label>
          <Form.Control type='file' onChange={handleFileChange} contentEditable />
          {imageError && <p>{imageError}</p>}
        </Form.Group> */}

        <button className="recipe-submit" type="submit" onClick={(e) => setForm({...form, uid: user.uid, createdAt: timestamp.fromDate(new Date())})}>Create Recipe</button>
    </Form>
  </div>
  );
}
