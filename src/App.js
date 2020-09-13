import React from 'react';
import logo from './logo.svg';
import { Route, Switch} from 'react-router-dom';
import HomePage from './HomePage'


import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" exact component={HomePage}/>

        </Switch>
    </div>
  );
}

export default App;
