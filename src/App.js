import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
//import { Link,Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import Singin from './Component/Singin';
import Homepage from './Component/Homepage';
import Login from './Component/Login';
function App() {

 
  return (
<Router>
  <>
 
 

    <Switch>
    <Route path="/singup">
        <Singin/>
    </Route>
    <Route path="/login">
        <Login/>
    </Route>
    <Route path="/">
    <Home/>
    </Route>
 </Switch>
  
  </>
</Router>
    );
}

export default App;


