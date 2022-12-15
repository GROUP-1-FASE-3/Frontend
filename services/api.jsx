import axios from 'axios';

const instance = axios.create({
  baseURL: `http://18.141.230.182:80/`,
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
  register: ({ user_name, email, password, gender, phone_number, user_images }) =>
    instance({
      method: `POST`,
      url: `users`,
      data: {
        user_name: user_name,
        email: email,
        password: password,
        gender: gender,
        phone_number: phone_number,
        user_images: user_images,
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

  getReservation: (token) =>
    instance({
      method: `GET`,
      url: `reservations`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getVillaById: (token, id) =>
    instance({
      method: `GET`,
      url: `villas/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getReservation: (token, { villa_id, start_date, end_date }) =>
    instance({
      method: `POST`,
      url: `reservations/check`,
      data: {
        villa_id: villa_id,
        start_date: start_date,
        end_date: end_date,
      },
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
};
