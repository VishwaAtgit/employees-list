import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login'

function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}></h1>
                  <Switch>
                      <Route path="/" exact component={Login} />
                      <Route path="/home" component={Home} />
                      <Route path="/login" component={Login} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
