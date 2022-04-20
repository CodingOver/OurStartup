import axios from '../../libs/axios/index';
import parsedMessages from '../../parsers/parsed-messages'

const GetStarted = {
    create: async info => {
        try {
            await axios().post('get-started', info)
       } catch (error) {
           return parsedMessages(error)
       } 
    }
}

export default GetStarted;