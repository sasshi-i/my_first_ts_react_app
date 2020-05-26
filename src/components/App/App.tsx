import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import EventsIndex from '../EventsIndex';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
