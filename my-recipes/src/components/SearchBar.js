import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchTerm}`);
  }

  return (
    <div className="search-bar">
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="search">Search:</Form.Label>
        <Form.Control type="text" id="search" onChange={(e) => setSearchTerm(e.target.value)} />
      </Form>
    </div> 
  )
}
