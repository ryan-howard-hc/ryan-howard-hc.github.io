import React from 'react';
import './00bloga.css'; 
import { Link } from 'react-router-dom';
import img from '../img/Snapchat-1938554291.jpg';


const Week1Blog = () => {
  return (
    <body className='individual-body'>
    <div className="individual-blog">
      <h1>Learning to Code: New Beginnings?</h1>
      <div className="text-container">
      <br></br>
      <img src="https://consequence.net/wp-content/uploads/2018/11/they-live.jpg?quality=80" alt="They live" />
      <h2>The Rebirthing</h2>

      <p>The First week was not at all what I was expecting. _Pure_ anxiety, lack of preparedness, and a propensity for overlooking details is getting the best of me. I'm learning to slow down and go at my own pace instead of trying to keep up with the more knowledgeable individuals in my cohort. Luckily, the people in the course attending with me have been very friendly, non-judgmental, and helpful. I'm still coming out of my shell, and need to get out there and ask more questions.</p>
      <h2>Expanding what I know</h2>
      <img src={img} alt="pflanzen" className="smaller-image" />
      <p>- First and foremost, get used to asking for help
        <br></br>
        - Before diving into material, read instructions thoroughly and determine what the end goal is
        <br></br>
        - Expand my usage of the terminal and properly utilize the 'git-flow strategy'
        <br></br>
        - Repeat repeat repeat my usage of HTML and CSS to familiarize my understanding of the product
        <br></br>
        - Lastly, not get too comfortable. As was stated previously, if ya aint uncomfortable, ya aint learnin'</p>

      <h2>Who am I?</h2>
      
      <p>I wish I could even answer this, but I love puttering around in my 'garden.' Love my tropical plants, and messing around with shrimp and fishtanks!</p>
      
    </div>
    </div>
    </body>
  );
};

export default Week1Blog;