import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BlogJourney from './00blogjourney';
import AboutMe from './01aboutme';
import Week1Blog from './blogweeks/02blogweek1';
import Week2Blog from './blogweeks/02blogweek2';
import Week3Blog from './blogweeks/02blogweek3';
import Week4Blog from './blogweeks/02blogweek4';
import Week5Blog from './blogweeks/02blogweek5'; 
import Week6Blog from './blogweeks/02blogweek6'; 
import Week7Blog from './blogweeks/02blogweek7';
import Week8Blog from './blogweeks/02blogweek8'; 
import Week9Blog from './blogweeks/02blogweek9';
import Week10Blog from './blogweeks/02blogweek10';
import Week11Blog from './blogweeks/02blogweek11';
import Week12Blog from './blogweeks/02blogweek12';
import Week13Blog from './blogweeks/02blogweek13';
import Week14Blog from './blogweeks/02blogweek14';
import Week15Blog from './blogweeks/02blogweek15';
import Week16Blog from './blogweeks/02blogweek16';


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
          <Route path="/02blogweek9" component={Week9Blog} />
          <Route path="/02blogweek10" component={Week10Blog} />
          <Route path="/02blogweek11" component={Week11Blog} />
          <Route path="/02blogweek12" component={Week12Blog} />
          <Route path="/02blogweek13" component={Week13Blog} />
          <Route path="/02blogweek14" component={Week14Blog} />
          <Route path="/02blogweek15" component={Week15Blog} />
          <Route path="/02blogweek16" component={Week16Blog} />


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
