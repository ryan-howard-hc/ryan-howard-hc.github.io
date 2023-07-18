import React from 'react';
import { Link } from 'react-router-dom';


const Week6Blog = () => {
  return (
    <div>
      <h1>Week 6 - React Intro</h1>
      <h2>Are javascript frameworks and libraries easy or hard to use?</h2>
      <p>Well, learning them is already becoming a pain in the ass, but in a lot of respects, I would say easier in the long run. It is certainly confusing right now to connect all of these individual js pages as well as switching to a new method of javascript immediately following any understanding of javascript.</p>

      <h2>What Frameworks or Libraries are you interested in learning more about?</h2>
      <p>Seeing as how I've barely touched this so far, I feel like this would be a better question a week or two from now! But after a little further review, Next.js has been what we're working with, so that for now (haha). All jokes aside, I've seen material-ui and I have an interest in creating an app or two, or gaining at least rudimentary experience in this topic.</p>

      <h2>One emerging JavaScript tool that I'd like to learn more about</h2>
      <p>In a world where much of life is based around efficiency and speed, I started reading about ESBuild.
        <ul>
          <li>Extreme speed without needing a cache</li>
          <li>JavaScript, CSS, TypeScript, and JSX built-in</li>
          <li>A straightforward API for CLI, JS, and Go</li>
          <li>Bundles ESM and CommonJS modules</li>
          <li>Tree shaking, minification, and source maps</li>
          <li>Local server, watch mode, and plugins</li>
        </ul>
      </p>
    </div>
  );
};

export default Week6Blog;