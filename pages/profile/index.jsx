import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer";
import FormProfile from "../../Components/FormProfile";
import Navbar from "../../Components/Navbar";
import TableBodyProfile from "../../Components/TableBodyProfile";
import api from '../../services/api';
import Link from 'next/link'

const index = () => {

  const [user, setUser] = useState([]);
  const [userVilla, setUserVilla] = useState([])
  const currentUsers = useSelector((state) => state.users.currentUser)

  const getDataUser = async () => {
    await api
      .getUser(localStorage.getItem('userToken'), currentUsers.id)
      .then((response) => {
        const result = response.data.data
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVillaUser = async () => {
    await api.getVillaUser(localStorage.getItem('userToken'))
      .then(response => {
        const data = response.data.data
        console.log('data', data)
        setUserVilla(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getDataUser();
    getVillaUser()
  }, []);
  console.log('this ', userVilla)

  return (
    <div className="bg-white">
      <Navbar />
      <div className="px-12 lg:px-28">
        {user ? (
          <FormProfile
            full_name={user.user_name}
            emails={user.email}
            phone_numbers={user.phone_number}
            genders={user.gender}
            images={user.user_images}
            phone_number_info={user.phone_number}
            gender_info={user.gender}
          />
        ) : <></>}
        <div className="my-20 container mx-auto">
          <h1 className="font-bold text-3xl text-stay-primary">
            Property Management
          </h1>
          <button className="mt-20 btn bg-stay-primary text-white">
            <Link href='/property/add'>
              Add new
            </Link>
          </button>
          <div className="overflow-x-auto my-20 container mx-auto">
            <table className="table w-10/12">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Bedroom</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {userVilla ? (
                userVilla.map((item) => {
                  return (
                    <TableBodyProfile
                      vila_name={item.vila_name}
                      address={item.address}
                      detail_bedroom={item.detail_bedroom}
                      price={item.price}
                    />
                  )
                })
              ) : <></>}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
