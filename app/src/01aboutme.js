import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <div className="full-width-container">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-1">
              <div className="header-content text-center " style={{ position: "sticky", top: 0 }}>
                <div className="rounded-circle mt-2" style={{ width: "100px", height: "120px", position: "relative", overflow: "hidden", margin: "0 auto" }}>
                  <div className="rounded-circle mt-3" style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display: "flex" }}>
                    <img src="/portfolio/img/Contact-Card-Icons/IMG_4615.JPG" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "50%" }} alt="Profile" />
                  </div>
                </div>
                <h1 className="headtitle">Ryan Howard</h1>
                <p className="mb-0">Full-Stack Developer</p>
                <div className="text-center">
                  <div className="sticky-container">
                    <div className="row sociallinks">
                      <h5 className="fw-bold">Get to know me!</h5>

                      <a className="nav-link fst-italic" href="https://www.linkedin.com/in/ryan-matthew-howard-566b49277/">LinkedIn</a>
                      <a className="nav-link fst-italic" href="https://github.com/ryan-howard-hc">GitHub</a>
                      <a className="nav-link fst-italic" href="mailto:ryan.howard1993@gmail.com">ryan.howard1993@gmail.com</a>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 header-content text-center">
              <h2 style={{ textAlign: "center", marginBottom: "3%", fontWeight: 900, fontStyle: "oblique" }}>Lemme tell ya about myself!</h2>
              <div className="row">
                <p>Hello and welcome to my about me page! I'm thrilled to share my passions and ambitions with you. I'm an enthusiastic individual who finds joy in exploring various aspects of life. Let me take you on a journey through my interests and aspirations.</p>
                <p>Movies have always held a special place in my heart, and HBO has become my go-to platform for captivating storytelling. Whether it's immersing myself in epic sagas or indulging in thought-provoking documentaries, I appreciate the power of cinema to transport us to new worlds and evoke a range of emotions.</p>
                <p>When I'm not engrossed in the world of movies, you can find me admiring the beauty of tropical plants, especially aquatic ones. There's something magical about the lush greenery and vibrant colors they bring to any space. I enjoy learning about their unique characteristics and creating peaceful environments where they can thrive.</p>
                <p>Nature is my sanctuary, and I often find solace in hiking and camping adventures. Exploring scenic trails, witnessing breathtaking landscapes, and reconnecting with the great outdoors fuel my spirit. It's during these moments that I truly feel alive, surrounded by the wonders of our natural world.</p>
                <p>Animals hold a special place in my heart, and caring for them brings me immense joy. Whether it's tending to their needs, providing a safe and loving environment, or simply spending quality time with them, I find fulfillment in nurturing our furry and feathery friends.</p>
                <p>Mycology and entomology are two fascinating fields that captivate my curiosity. Exploring the intricate world of fungi and studying the behavior and ecology of insects allow me to dive deeper into the wonders of the natural world. I'm always eager to learn more and uncover the secrets that these organisms hold.</p>
                <p>With the ambition to own a plot of land, I aspire to create a sanctuary where I can combine my love for nature, animals, and mycology. It's a dream of mine to build a sustainable and harmonious environment that fosters growth, preservation, and appreciation for the natural world.</p>
                <p>Alongside my love for the natural world, I'm also passionate about technology and the ever-evolving field of web development. Having graduated from the University of Kentucky, I'm eager to continue my journey of learning and honing my skills as a full-stack developer. I have a strong desire to contribute to the digital landscape and leverage my creativity and problem-solving abilities to develop innovative and user-friendly web applications.</p>
                <p>In my pursuit of a current career, I'm dedicated to expanding my knowledge and mastering various programming languages and frameworks involved in web development. I embrace the challenges that come with staying at the forefront of this dynamic field and constantly seek new opportunities to grow and improve.</p>
                <p>I hope to continue learning, exploring, and making a positive impact in the world of full-stack development and beyond. Feel free to connect with me to share ideas or embark on new adventures together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;