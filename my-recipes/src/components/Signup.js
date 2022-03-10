import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
// react-bootstrap
import Form from 'react-bootstrap/Form'
// styles
import './Auth.css'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    console.log(email, password);
  }

  return (
    <React.Fragment>
    <h3>Sign Up</h3>
    <div className="auth-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className='col-6'>
          <Form.Label className='form-label'>Email</Form.Label>
          <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
        </Form.Group>

        <Form.Group className='col-6'>
          <Form.Label className='form-label'>Password</Form.Label>
          <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
        </Form.Group>

        {!isPending && <button className="auth-btn" type="submit">Submit</button>}
        {isPending && <button className="auth-btn" disabled>Loading...</button>}
        {error && <p>{error}</p>}
      </Form>
    </div>
  </React.Fragment>
  )
}
