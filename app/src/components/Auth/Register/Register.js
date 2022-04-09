import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../../services/Auth";

const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: ""});
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const handleInputChange = ({target: {value, name}}) => setData({...data, [name]: value });

  const handleRegister = async () => {
    const validations = await Auth.register(data);
    if (validations) return setErrors(validations)
    navigate("/login");
  };

  return (
    <div>
      {errors && <span>{errors}</span>}
      <div>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
          />
          <Link to="/login">Login</Link>
          <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
