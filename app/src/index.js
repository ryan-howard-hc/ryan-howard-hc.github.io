import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogJourney from './00blogjourney';
import AboutMe from './01aboutme';
import Week1Blog from './02blogweek1';
import Week2Blog from './02blogweek2';
import Week3Blog from './02blogweek3';
import Week4Blog from './02blogweek4';
import Week5Blog from './02blogweek5';
import Week6Blog from './02blogweek6';
import Week7Blog from './02blogweek7';
import Week8Blog from './02blogweek8';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/00blogjourney" component={BlogJourney} />
      <Route path = "/01aboutme" component={AboutMe} />
      <Route path="/02blogweek1" component={Week1Blog} />
      <Route path="/02blogweek2" component={Week2Blog} />
      <Route path="/02blogweek3" component={Week3Blog} />
      <Route path="/02blogweek4" component={Week4Blog} />
      <Route path="/02blogweek5" component={Week5Blog} />
      <Route path="/02blogweek6" component={Week6Blog} />
      <Route path="/02blogweek7" component={Week7Blog} />
      <Route path="/02blogweek8" component={Week8Blog} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
