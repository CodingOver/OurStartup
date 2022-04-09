import React from 'react'

// TODO: refactor...

const Landing = () => {
    return (
    <div>
        <header>
          <div className="container">
            <nav>
              <div className="logo">
                <a href="./index.html"><img src="https://quiety.themetags.com/assets/img/logo-white.png" alt="logo" /></a>
              </div>
              <ul className="pages-list" id="nav-ul">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="./index-rtl.html" style={{fontSize: '17px'}}>🇸🇦 AR</a></li>
              </ul>
              <div className="header-btn">
                <a className="sign-in-btn" href="./login.html">Sign In</a>
                <button className="get-Started-btn"><a href="./get-started.html">Get Started</a></button>
              </div>
              <div className="toggle">
                <i id="toggle-icon" className="fa-solid fa-align-justify" />
              </div>
              {/* Start Menu */}
              <div className="toggle-menu" id="toggle-menu">
                <div className="logo">
                  <img src="https://quiety.themetags.com/assets/img/logo-color.png" alt="logo" />
                </div>
                <ul className="pages-list-menu" id="nav-ul">
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#services">SERVICES</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                  <li><a href="#">BLOG</a></li>
                  <li><a href="./index-rtl.html">🇸🇦 AR</a></li>
                </ul>
                <div className="header-btn-menu">
                  <button className="sign-in-btn-menu"><a href="./login.html">Sign In</a></button>
                  <button className="get-Started-btn-menu"><a href="./get-started.html">Get Started</a></button>
                </div>
                <div className="hidden-icon" id="removeMenu">
                  <i className="fa-solid fa-xmark" />
                </div>
              </div>
            </nav>
          </div>
          <div className="header-cover">
            <div className="landscape-cover">
              <div className="flag">
                <div className="blackground">
                  <h1>Software Development Company With Digital Marketing Experts<span className="pot-md">.</span></h1>
                  <p>We partner with brands like yours to create websites your customers will remember, vastly improve your key metrics, and display your brand with pride.</p>
                  <a href="./get-started.html">Let's talk business</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="features" id="about">
          <h2>What makes us different from every other web design &amp; development agency?</h2>
          <div className="features-detail">
            <div className="special">
              <h3>We're specialized<span className="pot-sm">.</span></h3>
              <p>We're not generalists, we only offer you what we do best: SEO,full-stack development, and digital marketing.</p>
            </div>
            <div className="focus">
              <h3>We focus on results<span className="pot-sm">.</span></h3>
              <p>We care about the impact our work has on your business or organization—not how it looks in our portfolio or in an award showcase.</p>
            </div>
            <div className="responsive">
              <h3>We're responsive<span className="pot-sm">.</span></h3>
              <p>We limit the number of clients we take on each year to ensure each one has an outstanding customer experience. Expect responses in hours—not days.</p>
            </div>
            <div className="extra">
              <h3>We go the extra mile<span className="pot-sm">.</span></h3>
              <p>We view our engagements as relationships—not vendor agreements. In addition to what we produce, we also educate our customers on digital best practices along the way.</p>
            </div>
          </div>
        </section>
        <section className="about">
          <h4>👋 Hey, we're ovolet and our work's no joke<span className="pot-md">.</span></h4>
          <p>We help businesses like yours earn more customers, differentiate from competitors, and recruit top talent with their websites.</p>
          <div className="video-detail">
            <video autoPlay muted loop>
              <source src="../../imgs/Ready-fin-3-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h4>What you should expect<span className="pot-md">.</span></h4>
        </section>
        <div className="about-service">
          <div className="about-service-section">
            <img src="https://huemor.rocks/wp-content/uploads/2020/01/19HUE003_service_PRF3.gif" alt="" />
            <h4>The most responsive, friendly service you've likely ever had<span className="pot-sm">.</span></h4>
            <p>Clients hire us based on our merit – they love us for our accessibility. We go to great lengths to be incredibly responsive to your needs so you never feel ignored and always feel taken care of.</p>
          </div>
          <div className="about-service-section">
            <img src="https://huemor.rocks/wp-content/uploads/2020/01/19HUE003_frame_PRF3.gif" alt="" />
            <h4>A website you'll be proud of<span className="pot-sm">.</span></h4>
            <p>You’ve built an amazing brand – your new website will reflect that and take it to the next level. Every element on your new site will align perfectly with your brand voice and values. (Are you still uncovering your brand? We can help you there too.)</p>
          </div>
          <div className="about-service-section">
            <img src="https://huemor.rocks/wp-content/uploads/2020/01/19HUE003_gains_PRF2.gif" alt="" />
            <h4>Massive results that actually matter<span className="pot-sm">.</span></h4>
            <p>You have financial goals to hit. We completely get that. That's why we focus on and drastically improve the metrics that matter: Conversions, sales, and engagement. Tell us your KPIs, and we'll build you a website that knocks them out of the park.</p>
          </div>
        </div>
        <div className="services" id="services">
          <div className="what-we-do service">
            <h5>What We Do<span className="pot-md">.</span></h5>
            <p>You deserve better than a one-size-fits-all option. Our agency's capabilities are focused around one thing – creating leading industry-leading websites. Below is a brief list of where we excel.</p>
          </div>
          <div className="what-we-do-services">
            <div className="service">
              <h5>Digital Strategy<span className="pot-md">.</span></h5>
              <ul>
                <li><a href="#">Social Media Marketing</a></li>
                <li><a href="#">Analytics &amp; Research</a></li>
                <li><a href="#">Digital Strategy</a></li>
              </ul>
            </div>
            <div className="service">
              <h5>SEO<span className="pot-md">.</span></h5>
              <ul>
                <li><a href="#">Full Service Seo</a></li>
                <li><a href="#">Link Building</a></li>
                <li><a href="#">SEO Content</a></li>
              </ul>
            </div>
            <div className="service">
              <h5>Development<span className="pot-md">.</span></h5>
              <ul>
                <li><a href="#">Full Stack Development</a></li>
                <li><a href="#">Wordpress Development</a></li>
                <li><a href="#">Shopify Development</a></li>
              </ul>
            </div>
          </div>
          <div className="design-thinking">
            <div className="design-info">
              <h5>design thinking</h5>
              <span>That's how we understand problems</span>
              <p>Every problem is a task to solve. We apply a human-centered approach for creative problem-solving to put together the customers' needs, tech innovations, and business goals.</p>
              <p>Keeping the user at the center of your products leads to the development of digital solutions that are desirable on the market, technologically advanced, and economically viable.</p>
              <p>Design thinking is a new way of seeing the world that allows brands to listen to their customers thus create in-demand world-famous digital products.</p>
            </div>
            <div className="design-graphics">
              <img src="../../imgs/designThinking.svg" alt="" />
            </div>
          </div>
          <div className="design-thinking agile">
            <div className="design-info">
              <h5>we are agile</h5>
              <span>That’s how we deliver solutions</span>
              <p>We are not betting on a "big bang" launch. We stick to flexible approaches in our workflow delivering work in small stages. Each one gets evaluated continuously forming a natural mechanism to adjust quickly in a fast-changing environment.</p>
              <p>It advocates adaptive planning, evolutionary development, early delivery, and continual improvement of a pixel-perfect digital product.</p>
            </div>
            <div className="design-graphics">
              <img src="../../imgs/agile.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
          <div className="contact-by">
            <div className="email-us">
              <i className="fa-solid fa-envelope" />
              <h6>Email Us</h6>
              <p>Simple drop us an email at <span>contact@ovolet.com</span> and you'll receive a reply within 24 hours.</p>
              <a className="email" href="contact@ovolet.com">Email Us</a>
            </div>
            <div className="call-us">
              <i className="fa-solid fa-phone" />
              <h6>Give us a call</h6>
              <p>Give us a ring. Our Experts are standing by monday to friday from 9am to 5pm .</p>
              <a href="00-976-561-008">00-976-561-008</a>
            </div>
          </div>
          <div className="contact-direct">
            <div className="text">
              <h6>Let's Chat<span className="pot-md">.</span></h6>
              <p>Are you ready to make something memorable?</p>
              <span>we'ready to help.</span>
              <img src="https://quiety.themetags.com/assets/img/contact-us-img-2.svg" alt="contact us" />
            </div>
            <div className="form">
              <form action="#">
                <div className="name">
                  <input type="text" name="first-name" placeholder="FIRST NAME*" />
                  <input type="text" name="last-name" placeholder="FIRST LAST*" />
                </div>
                <input type="email" name="email" id="email" placeholder="EMAIL*" />
                <input type="text" name="company" id="company" placeholder="Company Name" />
                <input type="number" name="number" id="number" placeholder="NUMBER" />
                <input type="submit" name="submit" id="submit" />
              </form>
            </div>
          </div>
          <footer>
            <p>© 2022 Ovolet Rights Reserved. OVOLET LTD Designs</p>
            <ul className="social">
              <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
              <li><a href><i className="fa-brands fa-instagram" /></a></li>
              <li><a href="#"><i className="fa-brands fa-github" /></a></li>
            </ul>
          </footer>
        </div>
      </div>
    )

}

export default Landing;