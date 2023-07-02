import React from 'react';

const Header = () => {
  return (
    <header className="custom-header bg-primary-subtle border-5 border-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="header-content">
              <div className="header-left d-flex flex-column align-items-center weeklinks">
                <h5 className="fw-bold mt-1">Blog Posts</h5>
                <a className="nav-link fst-italic" href="/portfolio/blogweek1.html">Week 1</a>
                <a className="nav-link fst-italic" href="/portfolio/blogweek2.html">Week 2</a>
                <a className="nav-link fst-italic" href="/portfolio/blogweek3.html">Week 3</a>
                <a className="nav-link fst-italic" href="/portfolio/blogweek4.html">Week 4</a>
                <a className="nav-link fst-italic" href="/portfolio/blogweek5.html">Week 5</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="header-content text-center">
              <div className="rounded-circle mt-2" style={{ width: '200px', height: '200px', position: 'relative', overflow: 'hidden', margin: '0 auto' }}>
                <div className="rounded-circle mt-3" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex' }}>
                  <img src="/portfolio/img/Contact-Card-Icons/IMG_4615.JPG" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '50%' }} alt="Profile" />
                </div>
              </div>
              <h1 className="headtitle">Ryan Howard</h1>
              <p>Full-Stack Developer</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="text-center">
              <div className="sticky-container">
                <div className="row sociallinks">
                  <h5 className="fw-bold">Get to know me!</h5>
                  <a className="nav-link fst-italic" href="https://www.linkedin.com/in/ryan-matthew-howard-566b49277/">LinkedIn</a>
                  <a className="nav-link fst-italic" href="https://github.com/ryan-howard-hc">GitHub</a>
                  <a className="nav-link fst-italic" href="mailto:ryan.howard1993@gmail.com">ryan.howard1993@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;