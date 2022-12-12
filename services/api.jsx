import axios from "axios";

const instance = axios.create({
    baseURL : `https://virtserver.swaggerhub.com/RAMADINAAINIRIZKI/GP3K1/1.0.0`
})

export default {
    login: ({email, password}) => 
        instance({
            method: `POST`,
            url: `auth`,
            data: {
                email: email,
                password: password,
            }
        }),
    register: ({username, email, password}) => 
        instance({
            method: `POST`,
            url: `users`,
            data: {
                username: username,
                email: email,
                password: password,
            }
        })
}