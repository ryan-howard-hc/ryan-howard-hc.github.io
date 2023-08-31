import React from 'react';
import './00bloga.css';
import { Link } from 'react-router-dom';


const Week9Blog = () => {
  return (
    <body className='individual-body'>
    <div className="individual-blog">
      
      <h1>Week 9</h1>
      <div className="text-container">
      <h2>Similarities and differences of JS and Python for me?</h2>
      <p>First off both languages support multiple programming paradigms, such as procedural, object-oriented, and functional programming styles. They both variables to hold values of any data type without explicit type declarations. You can hold different points in code without explicit type declarations like in C++. Lastly both follow a similar method of programming; procedural, object-oriented, and functional.</p>
      <p>As far as differences are concerned, the syntax of python is much more intuitive in my mind. This also includes indentation which is required, which with the formatting tools provided in VSCode seems unnecessary, but can be useful for formatting and interpretation in the long run, and was likely the intention. Another difference is that JS is mainly used for client-side web development, while Python can be used for both web development and server-side programming.</p>
      <img src="https://www.collinsdictionary.com/images/full/snakecharmer_118198594.jpg"></img>
      <h2>If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?</h2>
      <p>It's hard to answer this. While python felt much easier and more intuitive, that may have been a product of learning javascript prior. Learning how it was structured was invaluable to learning python, BUT python's syntax wouldve made learning JS much less of a headache I would definitely have to imagine.</p>
    <br></br>
      <h2>Think of a tech based tool that you use often and think about what the database structure might look like for it. Do you feel like you have a better understanding of how it works now</h2>
      <p>Let's start with Reddit, a mainstay in my life for the past decade. Absolutely I would have a better understanding of how it is built. When implementing the database structure in JavaScript, you would typically use an object-oriented approach or a data model to represent the entities and their relationships. You might use classes or constructor functions to create objects that represent users, posts, comments, etc. In the HTML part of the web application, you would use the appropriate HTML tags and structure to display the data fetched from the database. For example, you might have sections to display posts, comments, user profiles, and subreddit information. HTML templates are used to present the dynamic content from JavaScript. CSS might be  used to style and layout the HTML elements to create an appealing and user-friendly design for the Reddit-like system.</p>
      <h2>Could you see yourself enjoying building something like that in the future?</h2>
      <img src="https://i.ytimg.com/vi/29K_myCEwHY/maxresdefault.jpg"></img>
      <p>Absolutely, but not even necessarily that. Any kind of website similar to that, ecommerce websites, a foundation for gamebuilding or confidence to switch to C# for example to start creating games or apps, etc. Either way, what Ive learned has been invaluable towards what I may want to do in the future.</p>
    </div>
    </div>
    </body>
  );
};

export default Week9Blog;