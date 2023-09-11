import React from 'react';
import './00bloga.css';
import { Link } from 'react-router-dom';


const Week13Blog = () => {
  return (
    <body className='individual-body'>
    <div className="individual-blog">
      <h1>CAPSTONE 1</h1>
      <div className="text-container">
      <p>Connecting Django Backend to Frontend. Creating a web application that smoothly connects the Django backend to the frontend can be a rewarding experience, but it comes with its fair share of challenges.  Both the backend and frontend have their complexities. The backend deals with data storage, authentication, and business logic, while the frontend manages user interfaces and interactions. Bridging these two worlds requires a solid understanding of both sides. </p>

      <h2>Simple Howticulture hook for my capstone?</h2>
      <img src="https://i.pinimg.com/550x/e5/2b/de/e52bdec41033c4a401d062aef8cb46c0.jpg" alt="druid" />
      <p>Something like 'usePlantData' could make it much easier to get information about plants for a botanical database/forum. It simplifies how developers fetch and handle this plant data, making it less complicated to work with. It gives you a list of plants and tells you whether it's still loading the information or not. This tool is a handy helper for building websites about plants.</p>

      <h2>User stories</h2>
      <p> User stories provide a user-centric perspective, helping ensure that the development work aligns with the needs and expectations of the end-users. They are a valuable way to capture and prioritize requirements, facilitating effective communication between development teams and stakeholders.</p>

    </div>
    </div>
    </body>
  );
};

export default Week13Blog;