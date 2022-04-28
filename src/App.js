import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'





function App() {

  const user = useSelector(selectUser)
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>

        <Header />
        <Home />
        
        
        </Route>
        <Route exact path='/login'>
          <Login/>
         
        </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/teslaaccount' >
      </Route>
      </Switch>
   

    </div>
   </Router>
  );
}

export default App;
