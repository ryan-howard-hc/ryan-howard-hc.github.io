import React, {useEffect} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import blogData from './blog.json';

const BlogJourney = () => {
    return (
      <section id="blog" className="py-4">
        <div className="container-fluid">
          <h2 className="text-center mb-4">Blog journey</h2>
          <div className="row">
            {blogData.map((blog) => (
              <div className="col-lg-4 col-md-6 mb-4" key={blog.week}>
                <div className="card">
                  <img src={blog.image} className="card-img-top custom-img-size" alt={blog.week} />
                  <div className="card-body">
                    <h5 className="card-title">{blog.week}</h5>
                    <p className="card-text">{blog.description}</p>
                    <a href={blog.link} className="btn btn-primary">Curious?</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default BlogJourney;
