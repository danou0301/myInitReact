import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage.js'


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
