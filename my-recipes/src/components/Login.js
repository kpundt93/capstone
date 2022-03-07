import React from 'react'
import { useState } from 'react'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// styles
import './Auth.css'

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <React.Fragment>
    <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='form-label'>Email</Form.Label>
          <Form.Control type='email' onChange={e => setUser({...user, email: e.target.value})} required />
        </Form.Group>

        <Form.Group>
          <Form.Label className='form-label'>Password</Form.Label>
          <Form.Control type='password' onChange={e => setUser({...user, password: e.target.value})} required />
        </Form.Group>

        <Button className="btn btn-primary" type="submit">Submit</Button>
    </Form>
  </React.Fragment>
  )
}
