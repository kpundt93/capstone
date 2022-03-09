import React from 'react'
import { useReducer, useEffect, useState } from 'react'
import { projectFirestore } from '../firebase-config'
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
    case 'FOUND_DOCUMENTS':
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

  // search
  const search = async (term) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const searchResults = await ref.where("ingredients", "array-contains-any", term);
      dispatchIfNotCancelled({ type: 'FOUND_DOCUMENTS', payload: searchResults });
    }
    catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: error.message });
    }
  }

  // add a document to the firestore
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDocument = await ref.add(doc);
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument });
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