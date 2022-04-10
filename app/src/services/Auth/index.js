import axios from '../../libs/axios/index';
import parsedMessages from '../../parsers/parsed-messages'
import tokenStorage from '../../utils/tokenStorage'

const Auth = {
    register: async credentials => {
        try {
            await axios().post('auth/register', credentials)
       } catch (error) {
           return parsedMessages(error)
       } 
    },
    login: async credentials => {
        try {
            const {data} = await axios().post('auth/login', credentials)
            tokenStorage.save(data)
       } catch (error) {
            return parsedMessages(error)
       } 
    },
    logout: () => tokenStorage.remove()
}

export default Auth;