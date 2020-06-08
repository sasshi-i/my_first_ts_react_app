import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EventsIndex from '../EventsIndex';
import EventShow from '../EventShow'
import EventNew from '../EventNew'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={EventsIndex} />
          <Route exact={true} path="/events/:id" component={EventShow} />
          <Route exact={true} path="/event/new" component={EventNew} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
