import React, {useEffect} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import blogData from './blog.json';
import BlogJourney from './02teasers';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogJourney />
      <BlogOne />
    </div>
  );
}

export default App;