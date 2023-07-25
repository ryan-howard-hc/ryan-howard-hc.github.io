import React from 'react';
import { Link } from 'react-router-dom';
import './00blogjourney.css';
import img1 from "./img/0_ZjYSm_q36J4KChdn.jpg";
import img2 from "./img/talosiannn.jpg";
import img3 from "./img/memento-featured.jpg";
import img4 from "./img/2023-07-10 15_18_51-When you hack into the mainframe and disable their algorithms _ antimeme.png";
import img5 from "./img/Contact-Card-Icons/IMG_4615.JPG";

const BlogJourney = () => {
  return (
    <div className="blogjourney">
      <header style={{ backgroundColor: "rgba(0, 255, 128, 0.068)"}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="header-content">
                <div className="header-left d-flex flex-column align-items-center weeklinks">
                  <h5 className="fw-bold mt-1" style={{ color: "#f8f8f8", fontFamily: "Audiowide-regular" }}>Blog Posts</h5>
                  <div className="row">
                    <div className="col" style={{ paddingLeft: "100px" }}>
                      <Link to="/02blogweek1" className="nav-link fst-italic">Week 1</Link>
                      <Link to="/02blogweek2" className="nav-link fst-italic">Week 2</Link>
                      <Link to="/02blogweek3" className="nav-link fst-italic">Week 3</Link>
                      <Link to="/02blogweek4" className="nav-link fst-italic">Week 4</Link>
                      <Link to="/02blogweek5" className="nav-link fst-italic">Week 5</Link>
                    </div>
                    <div className="col">
                      <Link to="/02blogweek6" className="nav-link fst-italic">Week 6</Link>
                      <Link to="/02blogweek7" className="nav-link fst-italic">Week 7</Link>
                      <Link to="/02blogweek8" className="nav-link fst-italic">Week 8</Link>
                      <Link to="/02blogweek9" className="nav-link fst-italic">Week 9</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="header-content text-center">
                <div className="rounded-circle mt-2" style={{ width: "200px", height: "200px", position: "relative", overflow: "hidden", margin: "0 auto" }}>
                  <div className="rounded-circle mt-3" style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex" }}>
                    <img src={img5} className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "50%" }} alt="Profile" />
                  </div>
                </div>
                <h1 className="headtitle" style={{ color: "#f8f8f8", fontFamily: "Audiowide-regular"}}>Ryan Howard</h1>
                <p style={{ color: "#f8f8f8",fontFamily: "Audiowide-regular" }}>Full-Stack Developer</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <div className="sticky-container">
                  <div className="row sociallinks">
                    <h5 className="fw-bold" style={{ color: "#f8f8f8",fontFamily: "Audiowide-regular" }}>Get to know me!</h5>
                    
                    <Link to="/01aboutme" className="nav-link fst-italic">About me!</Link>
                    <a className="nav-link fst-italic" href="https://www.linkedin.com/in/ryan-matthew-howard-566b49277/">LinkedIn</a>
                    <a className="nav-link fst-italic" href="https://github.com/ryan-howard-hc">GitHub</a>
                    <a className="nav-link fst-italic" href="mailto:ryan.howard1993@gmail.com">ryan.howard1993@gmail.com</a>
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
          <h2 className="text-center mb-4" style={{ color: "#f8f8f8", marginRight: "30px" }}>Blog journey</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src="https://consequence.net/wp-content/uploads/2018/11/they-live.jpg?quality=80" className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week1" />
                <div className="card-body">
                  <h5 className="card-title">Week 1</h5>
                  <p className="card-text">What'd I get myself into</p>
                  <Link to="/02blogweek1" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src="https://i.ytimg.com/vi/r0qBaBb1Y-U/hqdefault.jpg" className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week2" />
                <div className="card-body">
                  <h5 className="card-title">Week 2</h5>
                  <p className="card-text">Pseu-pseu-pseucoding</p>
                  <Link to="/02blogweek2" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src={img1} className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week3" />
                <div className="card-body">
                  <h5 className="card-title">Week (WEAK) 3</h5>
                  <p className="card-text">This is fine..</p>
                  <Link to="/02blogweek3" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src={img2} className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week4" />
                <div className="card-body">
                  <h5 className="card-title">Week 4</h5>
                  <p className="card-text">okayokayokay</p>
                  <Link to="/02blogweek4" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src={img3} className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week5" />
                <div className="card-body">
                  <h5 className="card-title">Week 5</h5>
                  <p className="card-text">Pseudo Part Deux</p>
                  <Link to="/02blogweek5" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src="https://www.brookings.edu/wp-content/uploads/2016/06/mushroom_cloud001.jpg?w=1500" className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week6" />
                <div className="card-body">
                  <h5 className="card-title">Week 6</h5>
                  <p className="card-text">React, Adapt, React</p>
                  <Link to="/02blogweek6" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src={img4} className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week7" />
                <div className="card-body">
                  <h5 className="card-title">Week 7</h5>
                  <p className="card-text">C,L,WhoAmI?</p>
                  <Link to="/02blogweek7" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/365360/ss_5c6341f7d80b424d962006d28e47e48b619203ac.1920x1080.jpg?t=1667298527" className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week8" />
                <div className="card-body">
                  <h5 className="card-title">Week 8 || HALFWAY!</h5>
                  <p className="card-text">Dabbling with the Python || Snake Charming</p>
                  <Link to="/02blogweek8" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card" style={{ height: "100%", border: "1px" }}>
                <img src="https://www.collinsdictionary.com/images/full/snakecharmer_118198594.jpg" className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Week8" />
                <div className="card-body">
                  <h5 className="card-title">Week 9 || Mastering the Punji</h5>
                  <p className="card-text">Hypnosis complete</p>
                  <Link to="/02blogweek9" className="btn btn-primary">Curious?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blogMain" class="">
  <div class="row">
    <div class="col-11  ms-5 ">
      <iframe src="/blogweek1" class="preview-iframe"></iframe>
    </div>
  </div>
</section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
    </div>
  );
};

export default BlogJourney;