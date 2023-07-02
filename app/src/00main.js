import React, {useEffect} from 'react';
import axios from 'axios';
import blogData from './blog.json';
import BlogJourney from './02teasers';
import BlogOne from './03blogone';
import Header from './01header';

function Blog() {
  return (
    <div className="Blog">
      <Header />
      <BlogJourney />
      <BlogOne />
    </div>
  );
}

export default Blog;