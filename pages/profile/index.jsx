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
  const [cookie] = useCookies(["userToken"]);
  const currentUsers = useSelector((state) => state.users.currentUser)

  const getDataUser = async () => {
    await api
      .getUser(cookie.userToken, currentUsers.id)
      .then((response) => {
        const result = response.data.data
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataUser();
  }, []);
  console.log('this ', user)

  return (
    <div className="bg-white">
      <Navbar />
      <div className="px-12 lg:px-28">
        {user ? (
          <FormProfile
            full_name={user.user_name}
            email={user.email}
            phone_number={user.phone_number}
            gender={user.gender}
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
          <TableBodyProfile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
