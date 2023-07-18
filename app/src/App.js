// import React from 'react';
// import { Link } from 'react-router-dom';

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
//     <div>
//       <h1>My Portfolio</h1>
//       <BlogJourney />
//       <AboutMe />
//       <Week1Blog />
//       <Week2Blog />
//       <Week3Blog />
//       <Week4Blog />
//       <Week5Blog />
//       <Week6Blog />
//       <Week7Blog />
//       <Week8Blog />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
            <li>
              <Link to="/blogjourney">Blog Journey</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={BlogJourney} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/blogjourney" component={BlogJourney} />
          <Route path="/blogweek1" component={Week1Blog} />
          <Route path="/blogweek2" component={Week2Blog} />
          <Route path="/blogweek3" component={Week3Blog} />
          <Route path="/blogweek4" component={Week4Blog} />
          <Route path="/blogweek5" component={Week5Blog} />
          <Route path="/blogweek6" component={Week6Blog} />
          <Route path="/blogweek7" component={Week7Blog} />
          <Route path="/blogweek8" component={Week8Blog} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;