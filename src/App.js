/**
 * This component renders the whole component and uses react router
 * to route to different boards 
 */

import React, { Component } from 'react';
import Home from './components/Home';
import SingleBoard from './components/SingleBoard';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <h1 className="center"><Link to="/">Trello Clone</Link></h1>
          <Route exact path="/" component={Home} />
          <Route path="/:board_id" component={SingleBoard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
