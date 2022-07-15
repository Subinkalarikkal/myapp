import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {Switch,Route } from 'react-router-dom'

function App() {

  const [loginValue , setLoginValue] = useState(false)

  const getLoginvalue = (value) =>{
    setLoginValue(value)
  }

  return (
    <div className="App">

    <Switch>

    <Route path="/login">
        <Login />
    </Route>
    <Route path="/home">
       <Home />
    </Route>


    </Switch>      
    
    </div>
  );
}

export default App;
