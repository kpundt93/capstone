import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Home() {
  // need to do something with the uid when rendering recipe cards to only show recipes belong to the currently logged in.
  const { user } = useAuthContext();
  return (
    <div>Home</div>
  )
}
