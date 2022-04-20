import React, { useState } from 'react';
import GetStarted from "../../services/GetStarted";


const Contact = ({ setShowContact }) => {
  const [data, setData] = useState({ name: "", email: "", company: "", budget: "", number: "", description:""});
  const [errors, setErrors] = useState(null);
  const [done, setDone] = useState(false);


  const handleInputChange = ({target: {value, name}}) => setData({...data, [name]: value });

  const handleGetStarted = async () => {
    const res = await GetStarted.create(data);
    if (res?.validations) return setErrors(res.validations)
    setDone(true)
    setErrors(false)
  };

  return (
    <section className="contact">
      <i
        onClick={() => setShowContact(false)}
        className="fa-regular fa-circle-xmark contact__close"
      ></i>
      <div className="contact__form">
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
        {errors && <div className="contact__form__content__error">
          <p>{errors}</p>
        </div>}
        {done ? (
          <div className="contact__form__content__success">
            <img src="https://freewebillustrations.com/static/images/preview/thumb/isometric-online-startup.png" alt="success image"/>
            <p>Congratulations you have taken the first step, we will contact you as soon as possible!</p>
          </div>
        ) : (
          <div className="contact__form__fields">
          <input type="text" placeholder="name" name="name" onChange={handleInputChange}/>
          <div className='contact__form__fields__row'>            
          <input type="email" placeholder="email" name="email" onChange={handleInputChange}/>
          <input type="text" placeholder="number" name="number" onChange={handleInputChange}/>
          </div>
          <div className='contact__form__fields__row'>
            <select name="budget" id="budget" onChange={handleInputChange}>
              <option value>Budget</option>
              <option value="Less than 1000$">Less than 1000$</option>
              <option value="1000$ to 5000$">1000$ to 5000$</option>
              <option value="6000$ to 12000$">6000$ to 12000$</option>
              <option value="15000$ to 30000$">15000$ to 30000$</option>
              <option value="30000$ to 60000$">30000$ to 60000$</option>
              <option value="More than 60000$">More than 60000$</option>
            </select>
            <input type="company" placeholder="Company" name="company" onChange={handleInputChange}/>
          </div>
          <textarea name="description" rows="4" placeholder='Project description' onChange={handleInputChange}>
          </textarea>
          <button onClick={handleGetStarted}>Get started</button>
        </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
