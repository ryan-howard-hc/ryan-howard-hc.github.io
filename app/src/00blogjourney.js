import React from 'react';
import { Link } from 'react-router-dom';
import './00blogjourney.css';
import img1 from "./img/0_ZjYSm_q36J4KChdn.jpg";
import img2 from "./img/talosiannn.jpg";
import img3 from "./img/memento-featured.jpg";
import img4 from "./img/mainframe.png";
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
                {[1, 2, 3, 4, 5, 6].map((week) => (
                  <Link key={week} to={`/02blogweek${week}`} className="nav-link fst-italic">Week {week}</Link>
                ))}
              </div>
              <div className="col">
                {[7, 8, 9, 10, 11, 12].map((week) => (
                  <Link key={week} to={`/02blogweek${week}`} className="nav-link fst-italic">Week {week}</Link>
                ))}
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
      {[
        {
          img: "https://consequence.net/wp-content/uploads/2018/11/they-live.jpg?quality=80",
          title: "Week 1",
          text: "What'd I get myself into",
          link: "/02blogweek1"
        },
        {
          img: "https://i.ytimg.com/vi/r0qBaBb1Y-U/hqdefault.jpg",
          title: "Week 2",
          text: "Pseu-pseu-pseucoding",
          link: "/02blogweek2"
        },
        {
          img: img1,
          title: "Week (WEAK) 3",
          text: "This is fine..",
          link: "/02blogweek3"
        },
        {
          img: img2,
          title: "Week 4",
          text: "okayokayokay",
          link: "/02blogweek4"
        },
        {
          img: img3,
          title: "Week 5",
          text: "Pseudo Part Deux",
          link: "/02blogweek5"
        },
        {
          img: "https://www.brookings.edu/wp-content/uploads/2016/06/mushroom_cloud001.jpg?w=1500",
          title: "Week 6",
          text: "React, Adapt, React",
          link: "/02blogweek6"
        },
        {
          img: img4,
          title: "Week 7",
          text: "C,L,WhoAmI?",
          link: "/02blogweek7"
        },
        {
          img: "https://cdn.cloudflare.steamstatic.com/steam/apps/365360/ss_5c6341f7d80b424d962006d28e47e48b619203ac.1920x1080.jpg?t=1667298527",
          title: "Week 8 || HALFWAY!",
          text: "Dabbling with the Python || Snake Charming",
          link: "/02blogweek8"
        },
        {
          img: "https://www.collinsdictionary.com/images/full/snakecharmer_118198594.jpg",
          title: "Week 9 || Mastering the Punji",
          text: "Hypnosis complete",
          link: "/02blogweek9"
        },
        {
          img: "https://media.npr.org/assets/music/news/2010/01/django-c9adb735a15e716afbf59663b7258c055f38b4f4-s1100-c50.jpg",
          title: "Week 10",
          text: "Django Reinhardt would be proud",
          link: "/02blogweek10"
        },
        {
          img: "https://64.media.tumblr.com/3753fd3b76cce4da9e0da270090d7b8a/tumblr_inline_pr8u623UpC1qbycn1_500.png",
          title: "Week 11",
          text: "Back to the Future",
          link: "/02blogweek11"
        },
        {
          img: "https://www.redriderleglamps.com/cdn/shop/products/christmas-story-45-inch-full-size-leg-lamp-crate-1000-web_1_2_900x.jpg?v=1592330328",
          title: "Week 12",
          text: "Ah-Gee-Lay",
          link: "/02blogweek12"
        },
      ].map((card, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-4">
          <div className="card" style={{ height: "100%", border: "1px" }}>
            <img src={card.img} className="card-img-top custom-img-size" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={`Week ${index + 1}`} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <Link to={card.link} className="btn btn-primary">Curious?</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="blogMain" className="">
  <div className="row">
    <div className="col-11  ms-5 ">
      <iframe src="/blogweek1" className="preview-iframe"></iframe>
    </div>
  </div>
</section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossOrigin="anonymous"></script>
    </div>
  );
};

export default BlogJourney;