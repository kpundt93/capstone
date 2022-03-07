import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='form-label'>Email</Form.Label>
          <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
        </Form.Group>

        <Form.Group>
          <Form.Label className='form-label'>Password</Form.Label>
          <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} value={password} required />
        </Form.Group>

        {!isPending && <Button className="btn btn-primary" type="submit">Submit</Button>}
        {isPending && <Button className="btn" disabled>Loading...</Button>}
        {error && <p>{error}</p>}
    </Form>
  </React.Fragment>
  )
}
