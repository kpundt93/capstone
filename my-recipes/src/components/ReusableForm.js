import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

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

export default function ReusableForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label className='form-label'>Title</Form.Label>
        <Form.Control type='text' name='title' required />
      </Form.Group>
      <Form.Group>
        <Form.Label className='form-label'>Cook Time</Form.Label>
        <Form.Control type='text' name='cook-time' required />
      </Form.Group>
      <Form.Group>
        <Form.Label className='form-label'>Servings</Form.Label>
        <Form.Control type='number' name='servings' step='1' min='1' required />
      </Form.Group>
      <Form.Group>
        <Form.Label className='form-label'>Category</Form.Label>
        <Form.Select>
          <option>Choose a category</option>
          { categoryOptions }
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label className='form-label'>Ingredients</Form.Label>
        <Form.Control type='text' name='cook-time' required />
      </Form.Group>
      <Form.Group>
        <Form.Label className='form-label'>Instructions</Form.Label>
        <Form.Control type='text' name='cook-time' required />
      </Form.Group>
  </Form>
  )
}