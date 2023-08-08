import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="card" style={{ height: "100%", border: "1px" }}>
      <img src={imgSrc} className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={link} className="btn btn-primary">Curious?</Link>
      </div>
    </div>
  );
};

export default BlogCard;