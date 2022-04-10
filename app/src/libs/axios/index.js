import Axios from 'axios';

const axios = () => {
    const {token} = JSON.parse(localStorage.getItem('token'))
    return Axios.create({
        baseURL: 'http://localhost:3333/api',
        timeout: 3000,
        headers: {
            Authorization: `Bearer ${token}`,
        },  
    })
}

export default axios