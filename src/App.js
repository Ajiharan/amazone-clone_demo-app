import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/">
            <Header/>
            <h2>Home</h2>  
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
