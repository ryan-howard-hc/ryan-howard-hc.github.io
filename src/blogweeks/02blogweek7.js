import React from 'react';
import './00bloga.css';
import { Link } from 'react-router-dom';
import img from '../img/image.jpg'


const Week7Blog = () => {
  return (
    <body className='individual-body'>
    <div className="individual-blog">
      <h1>Week 7 - CLI</h1>
      <div className="text-container">
      <img src="/portfolio/img/2023-07-10 15_18_51-When you hack into the mainframe and disable their algorithms _ antimeme.png" alt="CLI Meme" />
      <h2>What have you learned about CLIs? Do you think they are scary?</h2>
      <p>At first glance, yes, CLIs are scary. After learning rudimentary coding experience, it's more of an experiential problem. What are they useful for? They allow for relatively easy navigation through file systems using basic commands. They also provide built-in systems that offer commands for this navigation and for controlling the system. Another very important use for CLIs is that they allow scripting and automating repetitive tasks involved in command executions. Lastly, they enable remote access/networking and can be used to establish secure connections remotely and check connectivity.</p>
      <img src={img}></img>
      <h2>If you were to build a CLI, what would it do?</h2>
      <p>It could allow for importing and exporting files for backup or automated reading purposes. It could provide integration between an OS and programs or facilitate communication between other programs. Additionally, it could allow for automated updating tasks or prioritizing tasks. It could also offer customization options in the same respect.</p>

      <h2>List some ideas that, without a Framework, would take you a long time to code</h2>
      <p>After conversing with other boot campers, it could allow for developing our own APIs, which I am interested in learning more about. I can't imagine how difficult it'd be for integration tests, like, for example, on my GitHub. It would be almost essential for making authentication on the user end reasonable within the context of billable hours.</p>
    </div>
    </div>
    </body>
  );
};

export default Week7Blog;