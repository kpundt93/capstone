import React from 'react'
import PropTypes from 'prop-types'
import { useState, useRef, useEffect } from 'react'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// styles
import './ReusableForm.css'

export default function ReusableForm(props) {
  const [form, setForm] = useState({
    title: "",
    cookTime: "",
    servings: 0,
    category: "",
    ingredients: [],
    instructions: "",
    notes: ""
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className='form-label'>Title</Form.Label>
        <Form.Control type='text' onChange={e => setForm({...form, title: e.target.value})} required />
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
        <Form.Label>Ingredients</Form.Label>
        { 
          form.ingredients.map((ingredient, i) => (
          <Form.Control type="text" key={i} value={ingredient} onChange={(e) => handleIngredient(e, i)} />
          ))
        }
        <button className='btn btn-secondary' onClick={handleIngredientCount}>Add ingredient</button>
        <button className='btn btn-danger' onClick={handleRemoveIngredient}>Remove ingredient</button>
      </Form.Group>

      <Form.Group>
        <Form.Label className='form-label'>Instructions</Form.Label>
        <Form.Control type='text' as='textarea' rows={3} onChange={(e) => setForm({...form, instructions: e.target.value})} required />
      </Form.Group>

      <Form.Group>
        <Form.Label className='form-label'>Notes</Form.Label>
        <Form.Control type='text' as='textarea' rows={2} onChange={(e) => setForm({...form, notes: e.target.value})} required />
      </Form.Group>
      <Button className="btn btn-primary" type="submit">{props.buttonText}</Button>
  </Form>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string
}