import React, { Component } from 'react';
import './App.css';import { Route, Switch } from 'react-router-dom'
import {Landing} from './components/landing-page/landing'

import {Layout} from './components/common/Layout'

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
          <Layout>
            <Route exact path="/" component={Landing} />
          </Layout>
        </Switch>
      </div>
    );
  }
}

// export class App;
