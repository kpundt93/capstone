import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
// components
import NavBar from './NavBar'
import Home from './Home'
import SideBar from './SideBar'
import CreateRecipe from './CreateRecipe'
import Login from './Login'
import Signup from './Signup'
// styles
import './App.css'

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className='app'>
      {authIsReady && (
        <BrowserRouter>
          <SideBar />
          <div className='container'>
            <NavBar />
            <Switch />
              <Route exact path='/'>
                {user && <Home />}
                {!user && <Redirect to='/login' />}
              </Route>
              <Route path="/create">
                {user && <CreateRecipe />}
                {!user && <Redirect to='/login' />}
              </Route>
              <Route path='/login'>
                {user && <Redirect to='/' />}
                {!user && <Login />}
              </Route>
              <Route path='/signup'>
                {user && <Redirect to='/' />}
                {!user && <Signup />}
              </Route>
            </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
