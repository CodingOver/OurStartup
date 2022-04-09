
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Auth from '../../../services/Auth'

const Login = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({email: '', password: ''})
    const [errors, setErrors] = useState(null)

    const handleInputChange = ({target: {value, name}}) => setData({...data, [name]: value})

    const handleLogin = async () => {
        const login = await Auth.login(data)
        if (login?.validations) return setErrors(login.validations)
        navigate("/dashboard"); 
    }

    return (
        <div>
            {errors && <span> {errors}</span>}
            <div>
                <h1>Login</h1>
                <input 
                    type='email' 
                    placeholder='Email' 
                    name='email'
                    onChange={handleInputChange} 
                />
                <input 
                    type='password' 
                    placeholder='password' 
                    name='password'
                    onChange={handleInputChange} 
                />
                <Link to='/register'>Register</Link>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )

}

export default Login;