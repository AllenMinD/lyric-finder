import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
