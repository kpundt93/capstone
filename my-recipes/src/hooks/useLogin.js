import React from 'react'
import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase-config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // login user
    try {
      const response = await projectAuth.signInWithEmailAndPassword(email, password);

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: response.user });

      // update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    }
    catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, isPending };

};