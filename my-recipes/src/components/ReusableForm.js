import React from 'react'
import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// styles
import './ReusableForm.css'
// images
import clear from '../img/clear.svg'

export default function ReusableForm(props) {
  const [title, setTitle] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [category, setCategory] = useState('');
  const [instructions, setInstructions] = useState('');
  const [notes, setNotes] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

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

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  }

  // function should delete ingredient from current ingredients list
  const handleClear = () => {
    const ingredientsList = ingredients;
    console.log(ingredientsList);
    const newIngredientsList = [...ingredientsList];
    console.log(newIngredientsList);
    }

  return (
    <Form>
      <Form.Group>
        <Form.Label className='form-label'>Title</Form.Label>
        <Form.Control type='text' onChange={(e) => setTitle(e.target.value)} value={title} required />
      </Form.Group>
      <Row>
        <Col>
          <Form.Label className='form-label'>Cook Time</Form.Label>
          <Form.Control type='text' onChange={(e) => setCookTime(e.target.value)} value={cookTime} required />
        </Col>
        <Col>
          <Form.Label className='form-label'>Servings</Form.Label>
          <Form.Control type='number' step='1' min='1' onChange={(e) => setServings(e.target.value)} value={servings} required />
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className='form-label'>Category</Form.Label>
        <Form.Select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option>Choose a category</option>
          { categoryOptions }
        </Form.Select>
      </Form.Group>
      <Form.Label>Ingredients</Form.Label>
      <InputGroup>
        <Col md='8'><FormControl placeholder='Ingredient' onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput}/></Col>
        <Col md="1"><button className="btn" onClick={handleAdd}>Add</button></Col>
      </InputGroup>
      <p>Current ingredients: {ingredients.map(i => <em id='ingredient' key={i}>{i} <img src={clear} id='remove' onClick={handleClear} /></em>)}</p> 
      <Form.Group>
        <Form.Label className='form-label'>Instructions</Form.Label>
        <Form.Control type='text' as='textarea' rows={3} onChange={(e) => setInstructions(e.target.value)} value={instructions} required />
      </Form.Group>
      <Form.Group>
        <Form.Label className='form-label'>Notes</Form.Label>
        <Form.Control type='text' as='textarea' rows={2} onChange={(e) => setNotes(e.target.value)} value={notes} />
      </Form.Group>
  </Form>
  )
}