import React from "react";

const Contact = ({setShowContact}) => {
  return (
    <section className="contact">
      <i onClick={() => setShowContact(false)} className="fa-regular fa-circle-xmark contact__close"></i>
      <form className="contact__form">
        <div className="contact__form__logo">
          <img
            src="https://cdn.shopify.com/s/files/1/0616/6187/2341/t/4/assets/GOiYETgtJq-logo-png_380x.png"
            alt="logo"
          />
        </div>
        <div className="contact__form__content">
          <h2>schedule a call.</h2>
          <p>
            Let's Get Your Project Started. It's time redefine what awesome
            really looks like. Whatever your goal or project size we will handel
            it utilize standards compliant. We hope you will be 100% satisfied.
          </p>
        </div>
        <div className="contact__form__fields">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Number" />
        <input type="company" placeholder="Company" />
        <textarea name="textarea" rows="4">Write something here</textarea>
        <button>Get started</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
