import React from 'react'
import { useReducer, useEffect, useState } from 'react'
import { projectFirestore, projectStorage } from '../firebase-config' 
import { useHistory } from 'react-router-dom'

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { ...state, isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return { ...state, isPending: false, document: action.payload, success: true, error: null }
    case 'EDITED_DOCUMENT':
      return { ...state, isPending: false, document: action.payload, success: true, error: null }
    case 'ERROR':
      return { ...state, isPending: false, document: null, success: false, error: action.payload }
    default:
      return state;
  }
}

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  const history = useHistory();

  // collection ref
  const ref = projectFirestore.collection(collection);

  // only dispatch the action if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document to the firestore
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDocument = await ref.add(doc);
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });

      // upload image
      // const uploadPath = `images/${addedDocument.id}/${image.name}`;
      // const img = await projectStorage.ref(uploadPath).put(image);
      // const imgUrl = await img.ref.getDownloadURL();

      // add image to recipe
      // await addedDocument.doc.update({ image: imgUrl });

      history.push('/');
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // edit a document in the firestore
  const editDocument = async (id, updates) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const editedDocument = await ref.doc(id).update(updates)
      dispatchIfNotCancelled({ type: 'EDITED_DOCUMENT', payload: editedDocument });
      history.push('/');
      return editedDocument;
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message });
    }
  };

  // delete a document from the firestore
  const deleteDocument = async (id) => {

  };

  // clean up function
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    }
  }, []);

  return { addDocument, editDocument, deleteDocument, response };
}