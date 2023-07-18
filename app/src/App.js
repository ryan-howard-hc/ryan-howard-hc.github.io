import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './00blogjourney.css';
import './index.css';
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

const App = () => {
  return (
    <Router>

        <Switch>
          <Route exact path="/" component={BlogJourney} />
          <Route path="/00blogjourney" component={BlogJourney} />
          <Route path="/01aboutme" component={AboutMe} />
          <Route path="/02blogweek1" component={Week1Blog} />
          <Route path="/02blogweek2" component={Week2Blog} />
          <Route path="/02blogweek3" component={Week3Blog} />
          <Route path="/02blogweek4" component={Week4Blog} />
          <Route path="/02blogweek5" component={Week5Blog} />
          <Route path="/02blogweek6" component={Week6Blog} />
          <Route path="/02blogweek7" component={Week7Blog} />
          <Route path="/02blogweek8" component={Week8Blog} />
        </Switch>

    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import BlogJourney from './00blogjourney';
// import AboutMe from './01aboutme';
// import Week1Blog from './02blogweek1';
// import Week2Blog from './02blogweek2';
// import Week3Blog from './02blogweek3';
// import Week4Blog from './02blogweek4';
// import Week5Blog from './02blogweek5';
// import Week6Blog from './02blogweek6';
// import Week7Blog from './02blogweek7';
// import Week8Blog from './02blogweek8';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={BlogJourney} />
//         <Route path="/aboutme" component={AboutMe} />
//         <Route path="/blogweek1" component={Week1Blog} />
//         <Route path="/blogweek2" component={Week2Blog} />
//         <Route path="/blogweek3" component={Week3Blog} />
//         <Route path="/blogweek4" component={Week4Blog} />
//         <Route path="/blogweek5" component={Week5Blog} />
//         <Route path="/blogweek6" component={Week6Blog} />
//         <Route path="/blogweek7" component={Week7Blog} />
//         <Route path="/blogweek8" component={Week8Blog} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
