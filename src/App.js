import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/shared/layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Layout} />
          <Switch>
            <Route path="/hello" component={Layout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
