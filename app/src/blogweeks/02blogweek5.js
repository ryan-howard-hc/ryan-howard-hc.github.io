import React from 'react';
import './00bloga.css';
import { Link } from 'react-router-dom';


const Week5Blog = () => {
  return (
    <div className="container">
      <h1>WEEK 5!</h1>
      <h2>What exactly is pseudocode?</h2>
      <p>Simply put, pseudocode is a rudimentary step of instructions which is intended to be read by people rather than machine reading. It's an easy way to draw out a basic idea or plan on how to tackle an issue or task in computer science. You take this rough draft of sorts to outline what your attack plan on building algorithms and the complementary structure surrounding it. It's a good way to express algorithms and logic in a more human-readable format. It uses a combination of natural language phrases and basic programming constructs to represent the flow of control and the sequence of steps in a program.</p>
      <h2>The Advantages of the pseudo</h2>
      <p>Pseudocode is particularly useful for less experienced developers as it can use any language that the programmer prefers and understands or is proficient in. The more fleshed out the basic instructions are make getting to the end goal much less strenuous, as well as less likely to contain errors or missing features. For front-end it can allow an actual sketch of what you or the client want it to look like. It's also an easier concept to run by peers who might be able to offer insight with rough visuals and an attack plan. It's like building a puzzle in the sense that you can just grab larger pieces, put them together, and link them to the larger picture. Or like a trellis that allows you to lead your plant in the right direction.</p>
      <img src="/portfolio/img/large_0.jpg" alt="Week5" />
      <h2>How has pseudo improved the non-pseudo</h2>
      <p>It creates a solid template by which I can properly follow and creates structure. Otherwise, my non pseudo becomes disorganized chaos and I lose track and cannot piece the puzzle together. I was a skeptic initially, but later have become an advocate for the pseudo. It also serves as a nice checklist for what I want on the page. It also can serve as a pseudo-wireframe for design. It reduces the amount of WET code I produce. Lastly, it is a great way to manage what is on the user end, and catering to the customer which is arguably the most important point.</p>
    </div>
  );
};

export default Week5Blog;