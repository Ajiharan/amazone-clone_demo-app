import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './home/Home';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/">
            <Header/>
              <Home/>
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
