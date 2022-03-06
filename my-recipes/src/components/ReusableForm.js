import React from 'react'
import PropTypes from 'prop-types'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function ReusableForm(props) {

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

  const measurements = [
    "cup",
    "tbsp",
    "tsp",
    "each",
    "lb(s)",
    "oz",
    "pinch"
  ];

  const measurementOptions = measurements.map((measurement) => {
    return (
      <option key={measurement} value={measurement}>{measurement}</option>
    );
  });
  

  return (
    <Form>
      <Form.Group>
        <Form.Label className='form-label'>Title</Form.Label>
        <Form.Control type='text' name='title' required />
      </Form.Group>
      <Row>
        <Col>
          <Form.Label className='form-label'>Cook Time</Form.Label>
          <Form.Control type='text' name='cook-time' required />
        </Col>
        <Col>
          <Form.Label className='form-label'>Servings</Form.Label>
          <Form.Control type='number' name='servings' step='1' min='1' required />
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className='form-label'>Category</Form.Label>
        <Form.Select>
          <option>Choose a category</option>
          { categoryOptions }
        </Form.Select>
      </Form.Group>
      <Form.Label>Ingredients</Form.Label>
      <InputGroup>
        <Col md='6'><FormControl placeholder='Ingredient' /></Col>
        <Col md='2'><FormControl placeholder='Qty' /></Col>
        <Col>
          <Form.Select>
            <option>Measurement</option>
            { measurementOptions }
          </Form.Select>
        </Col>
      </InputGroup>
      <Form.Group>
        <Form.Label className='form-label'>Instructions</Form.Label>
        <Form.Control type='text' name='cook-time' as='textarea' rows={3} required />
      </Form.Group>
  </Form>
  )
}