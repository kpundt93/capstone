import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { timestamp, projectFirestore } from '../firebase-config'
import { useFirestore } from '../hooks/useFirestore'
import { useAuthContext } from '../hooks/useAuthContext'
// react-bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EditRecipe() {
  const { editDocument, response } = useFirestore('recipes');
  const { user } = useAuthContext();
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCookTime, setNewCookTime] = useState("");


  // const [form, setForm] = useState({
  //   title: "",
  //   cookTime: "",
  //   servings: 0,
  //   category: "",
  //   ingredients: [],
  //   instructions: "",
  //   notes: "",
  //   uid: "",
  //   createdAt: ""
  // });

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
      if (doc.exists) {
        setIsPending(false);
        setRecipe(doc.data());
      } else {
        setIsPending(false);
        setError('Could not find that recipe.');
      }
    });

    return () => unsub();

  }, [id]);

  // const categories = [
  //   "Breakfast",
  //   "Lunch",
  //   "Dinner",
  //   "Snacks",
  //   "Appetizers",
  //   "Sweets",
  //   "Holiday",
  //   "Soups"
  // ];
  
  // const categoryOptions = categories.map((category) => {
  //   return (
  //     <option key={category} value={category}>{category}</option>
  //   );
  // });

  // const handleIngredient = (e, i) => {
  //   e.preventDefault();
  //   const ingredientsClone = [...form.ingredients];
  //   ingredientsClone[i] = e.target.value;
  //   setForm({
  //     ...form,
  //     ingredients: ingredientsClone
  //   });
  // };

  // const handleIngredientCount = (e) => {
  //   e.preventDefault();
  //   setForm({
  //     ...form,
  //     ingredients: [...form.ingredients, ""]
  //   });
  // };

  // const handleRemoveIngredient = (e, i) => {
  //   e.preventDefault();
  //   const ingredientsClone = [...form.ingredients];
  //   console.log(ingredientsClone);
  //   const newIngredientsClone = ingredientsClone.splice(-1);
  //   console.log(newIngredientsClone);
  //   console.log(ingredientsClone);
  //   setForm({
  //     ...form,
  //     ingredients: ingredientsClone
  //   });
  // };

  const handleEdit = async (e) => {
    e.preventDefault();

    const fieldsToUpdate = {
      title: newTitle === "" ? recipe.title : newTitle,
      cookTime: newCookTime === "" ? recipe.cookTime : newCookTime
      // servings: e.target.servings.value,
      // category: e.target.category.value,
      // ingredients: e.target.ingredients.value,
      // instructions: e.target.instructions.value,
      // notes: e.target.notes.value
    };
    console.log(recipe);
    await editDocument(id, fieldsToUpdate);
  }

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <Form onSubmit={handleEdit}>
            <Form.Group>
              <Form.Label className='form-label'>Title</Form.Label>
              <Form.Control type='text' onChange={(e) => setNewTitle(e.target.value)} defaultValue={recipe.title} contentEditable />
            </Form.Group>

            <Row>
              <Col>
                <Form.Label className='form-label'>Cook Time</Form.Label>
                <Form.Control type='text' onChange={(e) => setNewCookTime(e.target.value)} defaultValue={recipe.cookTime} contentEditable />
              </Col>

              {/* <Col>
                <Form.Label className='form-label'>Servings</Form.Label>
                <Form.Control type='number' step='1' min='1' onChange={(e) => setForm({...form, servings: e.target.value})} required />
              </Col> */}
            </Row>

            {/* <Form.Group>
              <Form.Label className='form-label'>Category</Form.Label>
              <Form.Select onChange={(e) => setForm({...form, category: e.target.value})}>
                <option>Choose a category</option>
                { categoryOptions }
              </Form.Select>
            </Form.Group> */}

            {/* <Form.Group>
              <Form.Label>Ingredients</Form.Label>
              { 
                form.ingredients.map((ingredient, i) => (
                <Form.Control type="text" key={i} value={ingredient} onChange={(e) => handleIngredient(e, i)} />
                ))
              }
              <button className='btn btn-secondary' onClick={handleIngredientCount}>Add ingredient</button>
              <button className='btn btn-danger' onClick={handleRemoveIngredient}>Remove ingredient</button>
            </Form.Group> */}

            {/* <Form.Group>
              <Form.Label className='form-label'>Instructions</Form.Label>
              <Form.Control type='text' as='textarea' rows={3} onChange={(e) => setForm({...form, instructions: e.target.value})} required />
            </Form.Group> */}

            {/* <Form.Group>
              <Form.Label className='form-label'>Notes</Form.Label>
              <Form.Control type='text' as='textarea' rows={2} onChange={(e) => setForm({...form, notes: e.target.value})} />
            </Form.Group>
            <Button className="btn btn-primary" type="submit" onClick={(e) => setForm({...form, uid: user.uid, createdAt: timestamp.fromDate(new Date())})}>Create Recipe</Button> */}
            <Button className="btn btn-primary" type="submit">Update</Button>
        </Form>
      </>
    )}
  </div>
  );
}
