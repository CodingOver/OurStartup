import React, {useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";


const Landing = () => {
  const [showContact, setShowContact] = useState(false)
  return (
    <>
      <header>
        <nav className="navigation">
          <div className="navigation__logo">
            <Link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0616/6187/2341/t/4/assets/GOiYETgtJq-logo-png_380x.png"
                alt="logo"
              />
            </Link>
          </div>
          <ul className="navigation__items" id="nav-ul">
            <li className="navigation__items__item">
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
          </ul>
          <div className="navigation__start">
            <button onClick={() => setShowContact(true)}>Get started</button>
          </div>
        </nav>
      </header>

      {showContact && <Contact setShowContact={setShowContact}/>}

      <div className="hero">
        <div className="hero__content">
          <h1>
            Software Development Company With Digital Marketing Experts
            <span className="dot">.</span>
          </h1>
          <p>
            We partner with brands like yours to create websites your customers
            will remember, vastly improve your key metrics, and display your
            brand with pride.
          </p>
          <button onClick={() => setShowContact(true)}>Let's talk business</button>
        </div>
        <div className="hero__image">
          <img
            alt="hero image"
            src="https://isometric.online/wp-content/uploads/2019/08/Business_SVG.svg"
          />
        </div>
      </div>

      <section className="services">
        <div className="service">
          <div className="service__icon">
            <i class="fa-solid fa-anchor"></i>
          </div>
          <div className="service__name">
            <h4>Lorem ipsum dolor</h4>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <i className="fa-solid fa-apple-whole"></i>
          </div>
          <div className="service__name">
            <h4>Lorem ipsum dolor</h4>
          </div>
        </div>

        <div className="service">
          <div className="service__icon">
            <i className="fa-brands fa-btc"></i>
          </div>
          <div className="service__name">
            <h4>Lorem ipsum dolor</h4>
          </div>
        </div>
      </section>

      <div className="about">
        <h1 className="about__title">
          What makes us different from every other web design & development
          agency?
        </h1>

        <div className="about__items">
          <div className="about__item">
            <h3>We're specialized.</h3>
            <p>
              We're not generalists, we only offer you what we do best:
              SEO,full-stack development, and digital marketing.
            </p>
          </div>

          <div className="about__item">
            <h3>We focus on results.</h3>
            <p>
              We care about the impact our work has on your business or
              organization—not how it looks in our portfolio or in an award
              showcase.
            </p>
          </div>

          <div className="about__item">
            <h3>We're responsive.</h3>
            <p>
              We limit the number of clients we take on each year to ensure each
              one has an outstanding customer experience. Expect responses in
              hours—not days.
            </p>
          </div>
        </div>

        <section className="design">
          <div className="design__card">
            <div className="design__content">
              <h2>Design thinking</h2>
              <span>That's how we understand problems</span>
              <p>
                Every problem is a task to solve. We apply a human-centered
                approach for creative problem-solving to put together the
                customers' needs, tech innovations, and business goals. Keeping
                the user at the center of your products leads to the development
                of digital solutions that are desirable on the market,
                technologically advanced, and economically viable. Design
                thinking is a new way of seeing the world that allows brands to
                listen to their customers thus create in-demand world-famous
                digital products.
              </p>
            </div>
            <div className="design__image">
              <img src="/assets/img/designThinking.svg" alt="design" />
            </div>
          </div>

          <div className="design__card">
          <div className="design__image">
              <img src="/assets/img/agile.svg" alt="design" />
            </div>
            <div className="design__content">
              <h2>We are agile</h2>
              <span>That’s how we deliver solutions</span>
              <p>
                We are not betting on a "big bang" launch. We stick to flexible
                approaches in our workflow delivering work in small stages. Each
                one gets evaluated continuously forming a natural mechanism to
                adjust quickly in a fast-changing environment. It advocates
                adaptive planning, evolutionary development, early delivery, and
                continual improvement of a pixel-perfect digital product.
              </p>
            </div>
            
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
