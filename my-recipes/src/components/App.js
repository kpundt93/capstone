import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// components
import NavBar from './NavBar'
import Home from './Home'
import SideBar from './SideBar'
import CreateRecipe from './CreateRecipe'
import Login from './Login'
import Signup from './Signup'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <SideBar />
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
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
