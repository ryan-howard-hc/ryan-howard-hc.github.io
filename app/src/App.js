import React from 'react';
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
    <div>
      <h1>My Portfolio</h1>
      <BlogJourney />
      <AboutMe />
      <Week1Blog />
      <Week2Blog />
      <Week3Blog />
      <Week4Blog />
      <Week5Blog />
      <Week6Blog />
      <Week7Blog />
      <Week8Blog />
    </div>
  );
};

export default App;