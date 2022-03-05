import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
  return (
    <div className='app'>
    <BrowserRouter>
      <SideBar />
      <div className='container'>
        <NavBar />
        <Switch />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/create">
            <CreateRecipe />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
