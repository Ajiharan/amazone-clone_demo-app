import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './home/Home';
import CheckOut from './checkout/CheckOut';

function App() {
  return (
    <Router>
      <div className="App">   
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home/>
          </Route>
          <Route exact path="/checkout">
            <Header/>
            <CheckOut/>
          </Route>
          <Route path="/login">
            <h2>Login</h2>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
