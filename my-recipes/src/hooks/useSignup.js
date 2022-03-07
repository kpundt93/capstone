import React from 'react'
import { useState } from 'react'
import { projectAuth } from '../firebase-config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // sign up user
      const response = await projectAuth.createUserWithEmailAndPassword(email, password);
      console.log(response.user);

      // if sign up fails, throw error
      if(!response) {
        throw new Error('Could not complete sign up.');
      }

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: response.user });

      setIsPending(false);
      setError(null);
    }
    catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};