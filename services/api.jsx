import axios from "axios";


const instance = axios.create({
    baseURL: `http://18.141.230.182:80`,
});


export default {
    login: ({ email, password }) =>
        instance({
            method: `POST`,
            url: `auth`,
            data: {
                email: email,
                password: password,
            },
        }),
    register: ({ username, email, password }) =>
        instance({
            method: `POST`,
            url: `users`,
            data: {
                username: username,
                email: email,
                password: password,
            },
        }),
    getUser: ({ token, id }) =>
        instance({
            method: `GET`,
            url: `users/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
};
