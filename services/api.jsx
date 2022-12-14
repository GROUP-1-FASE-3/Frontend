import axios from "axios";
import { type } from "os";
import { number } from "prop-types";


const instance = axios.create({

    baseURL : `http://18.141.230.182:80/`
})



export default {
    //auth
    login: ({ email, password }) =>
        instance({
            method: `POST`,
            url: `auth`,
            data: {
                email: email,
                password: password,
            },
        }),
    //user
    register: ({user_name, email, password, gender, phone_number, user_images}) => 
        instance({
            method: `POST`,
            url: `users`,
            data: {
                user_name: user_name,
                email: email,
                password: password,
                gender: gender,
                phone_number: phone_number,
                user_images: user_images
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

    //credit card
    addCreate: (token, {type, name, number, cvv, year, user_id}) =>
        instance({
            method: `POST`,
            url: `creditcards`,
            data: {
                type: type,
                name: name,
                number: number,
                cvv: cvv,
                year: year,
                user_id: user_id,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
};
