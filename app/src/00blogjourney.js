import React from 'react';
import { Link } from 'react-router-dom';


const BlogJourney = () => {
  return (
    <div>
      <header className="custom-header bg-primary-subtle border-5 border-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="header-content">
                <div className="header-left d-flex flex-column align-items-center weeklinks">
                  <h5 className="fw-bold mt-1">Blog Posts</h5>
                  <a className="nav-link fst-italic" href="/blogweek1.html">Week 1</a>
                  <a className="nav-link fst-italic" href="/blogweek2.html">Week 2</a>
                  <a className="nav-link fst-italic" href="/blogweek3.html">Week 3</a>
                  <a className="nav-link fst-italic" href="/blogweek4.html">Week 4</a>
                  <a className="nav-link fst-italic" href="/blogweek5.html">Week 5</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="header-content text-center">
                <div className="rounded-circle mt-2" style={{ width: "200px", height: "200px", position: "relative", overflow: "hidden", margin: "0 auto" }}>
                  <div className="rounded-circle mt-3" style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex" }}>
                    <img src="/portfolio/img/Contact-Card-Icons/IMG_4615.JPG" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "50%" }} alt="Profile" />
                  </div>
                </div>
                <h1 className="headtitle">Ryan Howard</h1>
                <p>Full-Stack Developer</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <div className="sticky-container ">
                  <div className="row sociallinks">
                    <h5 className="fw-bold">Get to know me!</h5>

                    <a className="nav-link fst-italic" href="/aboutme.html">About me!</a>
                    <a className="nav-link fst-italic" href="https://www.linkedin.com/in/ryan-matthew-howard-566b49277/">LinkedIn</a>
                    <a className="nav-link fst-italic" href="https://github.com/ryan-howard-hc">GitHub</a>
                    <a className="nav-link fst-italic" href="mailto: ryan.howard1993@gmail.com">ryan.howard1993@gmail.com</a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <br />

      <section id="blog" className="py-4">
        <div className="container-fluid">
          <h2 className="text-center mb-4">Blog journey</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="https://consequence.net/wp-content/uploads/2018/11/they-live.jpg?quality=80" className="card-img-top custom-img-size" alt="Week1" />
                <div className="card-body">
                  <h5 className="card-title">Week 1</h5>
                  <p className="card-text">What'd I get myself into</p>
                  <Link to="/02blogweek1" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="https://i.ytimg.com/vi/r0qBaBb1Y-U/hqdefault.jpg" className="card-img-top custom-img-size" alt="Week2" />
                <div className="card-body">
                  <h5 className="card-title">Week 2</h5>
                  <p className="card-text">Pseu-pseu-pseucoding</p>
                  <Link to="/02blogweek2" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/portfolio/img/0_ZjYSm_q36J4KChdn.jpg" className="card-img-top custom-img-size" alt="Week3" />
                <div className="card-body">
                  <h5 className="card-title">Week (WEAK) 3</h5>
                  <p className="card-text">This is fine..</p>
                  <Link to="/02blogweek3" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/portfolio/img/talosiannn.jpg" className="card-img-top custom-img-size" alt="Week4" />
                <div className="card-body">
                  <h5 className="card-title">Week 4</h5>
                  <p className="card-text">okayokayokay</p>
                  <Link to="/02blogweek4" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/portfolio/img/memento-featured.jpg" className="card-img-top custom-img-size" alt="Week5" />
                <div className="card-body">
                  <h5 className="card-title">Week 5</h5>
                  <p className="card-text">Pseudo Part Deux</p>
                  <Link to="/02blogweek5" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="https://www.brookings.edu/wp-content/uploads/2016/06/mushroom_cloud001.jpg?w=1500" className="card-img-top custom-img-size" alt="Week6" />
                <div className="card-body">
                  <h5 className="card-title">Week 6</h5>
                  <p className="card-text">React, Adapt, React</p>
                  <Link to="/02blogweek6" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="/portfolio/img/2023-07-10 15_18_51-When you hack into the mainframe and disable their algorithms _ antimeme.png" className="card-img-top custom-img-size" alt="Week7" />
                <div className="card-body">
                  <h5 className="card-title">Week 7</h5>
                  <p className="card-text">C,L,WhoAmI?</p>
                  <Link to="/02blogweek7" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/365360/ss_5c6341f7d80b424d962006d28e47e48b619203ac.1920x1080.jpg?t=1667298527" className="card-img-top custom-img-size" alt="Week8" />
                <div className="card-body">
                  <h5 className="card-title">Week 8 || HALFWAY!</h5>
                  <p className="card-text">Dabbling with the Python / Snake Charming</p>
                  <Link to="/02blogweek8" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
    </div>
  );
};

export default BlogJourney;