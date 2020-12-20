import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { MainPage } from './page/MainPage';
import { BlogPage } from './page/BlogPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
        <React.Fragment> 
          <MainPage/>
          </React.Fragment>
          )}
          />
          <Route exact path="/blog" render={() => (
            <React.Fragment>
              <BlogPage/>
            </React.Fragment>
          )}/>
      </Switch>
    </Router>
  );
}

export default App;
