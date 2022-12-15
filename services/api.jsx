import axios from 'axios';

const instance = axios.create({
  baseURL: `https://rubahmerah.site/`,
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
    //user
    register: ({ user_name, email, password, }) =>
        instance({
            method: `POST`,
            url: `users`,
            data: {
                user_name: user_name,
                email: email,
                password: password,
            },
        }),
    getUser: (token, id) =>
        instance({
            method: `GET`,
            url: `users/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    editProfile: (token, id, { user_name, email, password, users_image, gender, phone_number }) =>
        instance({
            method: `PUT`,
            url: `users/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                user_name: user_name,
                email: email,
                password: password,
                users_image: users_image,
                gender: gender,
                phone_number: phone_number,
                gender: gender,
                phone_number: phone_number,
            }
        }),
  //villa
  getVillaById: (token, id) =>
    instance({
      method: `GET`,
      url: `villas/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

    getVillas: (token) =>
        instance({
            method: `GET`,
            url: `villas`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    AddVilla: (token, { villa_name, price, description,
        address, villa_image1, villa_image2, villa_image3,
        detail_guest, detail_bedroom, detail_bed, detail_kitchen,
        detail_pool, detail_wifi, user_id }) =>
        instance({
            method: `POST`,
            url: `villas`,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            },
            data: {
                villa_name: villa_name,
                price: price,
                description: description,
                address: address,
                villa_image1: villa_image1,
                villa_image2: villa_image2,
                villa_image3: villa_image3,
                detail_guest: detail_guest,
                detail_bedroom: detail_bedroom,
                detail_bed: detail_bed,
                detail_kitchen: detail_kitchen,
                detail_pool: detail_pool,
                detail_wifi: detail_wifi,
                user_id: user_id
            }
        }),
    getVillaUser: (token) =>
        instance({
            method: `GET`,
            url: `villas/user`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    
    //credit card
    getCard: (token, id_user) =>
        instance({
            method: `GET`,
            url: `creditcards/user?user_id=${id_user}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            },
        }),
    addCard: (token, {type, name, number, cvv, month, year, user_id}) =>
        instance({
            method: `POST`,
            url: `creditcards`,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            },
            data: {
                type : type, 
                name : name,
                number : number, 
                cvv : cvv, 
                month: month, 
                year : year, 
                user_id : user_id
            }
        }),
    deleteCreditCard: (token, id) =>
        instance({
            method: `DELETE`,
            url: `creditcards/${id}`,
        }),

    deleteVillaUser: (token, id) =>
        instance({
            method: `DELETE`,
            url: `villas/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { id: id },
        })

};  

