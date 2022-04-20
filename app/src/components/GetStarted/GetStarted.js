import React from 'react'

const GetStarted = () => {
    return (
    <>
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
                <li><a href="./get-started-rtl.html" style={{fontSize: '17px'}}>🇸🇦 AR</a></li>
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
                  <li><a href="./get-started-rtl.html">🇸🇦 AR</a></li>
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
        </header>
        <div className="get-started">
          <div className="get-started-container">
            <div className="form-info">
              <span>schedule a call</span>
              <h1>Let's Get Your Project Started.</h1>
              <p>It's time redefine what awesome really looks like.</p>
              <p>Whatever your goal or project size we will handel it utilize standards compliant. We hope you will be 100% satisfied.</p>
              <img src="../../imgs/Asset_developer-1.svg" alt="" />
              <p>10 years of industry experience as one of the largest virtual companies in the world</p>
              <p>Are You Ready To Make Something memorable?</p>
              <p>We're Ready To Help.</p>
              <span>Voted A 2022 Global Leader</span>
            </div>
          </div>
          <div className="form">
            <h2>Discuss Your Latest Project With Ovolet Specialist.</h2>
            <p>We're looking forward to working together. Share your thoughts below and one of our Ovolet specialist will be in touch shortly</p>
            <form action="#" className="input-form">
              <div className="inputs">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="number" placeholder="Number" />
                <input type="text" placeholder="Company" />
                <input type="text" placeholder="Country" />
                <select name="budget" id="budget">
                  <option value>Budget</option>
                  <option value="Less than 1000$">Less than 1000$</option>
                  <option value="1000$ to 5000$">1000$ to 5000$</option>
                  <option value="6000$ to 12000$">6000$ to 12000$</option>
                  <option value="15000$ to 30000$">15000$ to 30000$</option>
                  <option value="30000$ to 60000$">30000$ to 60000$</option>
                  <option value="More than 60000$">More than 60000$</option>
                </select>
              </div>
              <textarea placeholder="Tell us more about your project" style={{height: '120px', width: 'auto'}} defaultValue={""} />
              <input type="submit" defaultValue="Get Started" />
            </form>
          </div>
        </div>
      </div>
    </>
    )
}

export default GetStarted;