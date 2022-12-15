import React from 'react';
import { useState } from 'react';
const FormBooking = () => {
  // const handleSubmit = (event) => {
  //   axios
  //     .post(
  //       `http://34.87.101.252:80/mentees`,
  //       {
  //         mentee_name: username,
  //         class_id: id,
  //         email: email,
  //         phone: phone,
  //         current_address: address,
  //         home_address: homeaddress,
  //         telegram: telegram,
  //         gender: gender,
  //         status: menteestatus,
  //         education_type: edutype,
  //         education_major: educationmajor,
  //         education_graduate: '2022',
  //         education_institution: institution,
  //         emergency_name: emergencyname,
  //         emergency_phone: emergencyphone,
  //         emergency_status: emergencystatus,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzA3MzU5NzgsInJvbGUiOiJkZWZhdWx0IiwidXNlcklkIjoxfQ.3jpYCkt5MrAYBEkQjWhRwnlPj9S4VifA03DoeU1_trk`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //     });

  //   event.preventDefault();
  // };
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [cardholder, setCardHolder] = useState('');
  const [card, setCard] = useState();
  const [payment, setPayment] = useState();
  const [cvv, setCVV] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [terms, setTerms] = useState();
  return (
    <form onSubmit={() => handleSubmit()} className="mb-0 my-2 mx-3 " action="#" method="POST ">
      <div className="form-control w-full mb-6">
        <label className="label font-medium text-md pb-2 ">Name</label>
        <input type="text" placeholder="Name" value={username} onChange={(e) => setUser(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
      </div>
      <div className="grid grid-rows-10 grid-flow-col">
        <label className="label font-medium text-md pb-2"> Email</label>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-3/4 input focus:bg-[#F8F8F8] opacity-50 input-bordered text-sm" />
      </div>
      <div className="form-control w-full mb-6">
        <label className="label font-medium text-md ">Select Payment Methods</label>
        <select value={payment} onChange={(e) => setPayment(e.target.value)} className="select w-full border border-[#00000042]">
          <option disabled selected></option>
          <option label=" Cedit Card">Credit Card</option>
          <option label=" Debet Card">Debet Card</option>
          <option label=" Bank Tranfer">Bank Transfer</option>
        </select>
      </div>
      <div className="grid grid-rows-10 grid-flow-col">
        <label className="label font-medium text-md pb-2">Card Number</label>
        <input type="number" placeholder="000-000-000-0000" value={card} onChange={(e) => setCard(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
      </div>
      <div className="grid grid-rows-10 grid-flow-col">
        <label className="label font-medium text-md pb-2">Card Holder</label>

        <input type="text" placeholder="status" value={cardholder} onChange={(e) => setCardHolder(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
      </div>
      <div className="grid grid-cols-3 mx-2">
        <div className="col">
          <label className="label">Year</label>
          <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} className="w-1/2 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
        </div>
        <div className="col">
          <label className="label">CVV</label>
          <input type="number" placeholder="CVV" value={cvv} onChange={(e) => setCVV(e.target.value)} className="w-1/2 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
        </div>
        <div className="col">
          <label className="label">Month</label>
          <input type="number" placeholder="Month" value={month} onChange={(e) => setMonth(e.target.value)} className="w-3/4 input input-bordered focus:bg-[#F8F8F8] opacity-50 text-sm" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label className="label ml-5" font-sm>
          <input name="terms" value={terms} onChange={(e) => setTerms(e.target.value)} className="shadow cursor-pointer border rounded" type="checkbox"></input>I have checked my order and agreed to all applicable ticket ordering regulations
        </label>
      </div>
      <div className="flex justify-end items-end">
        <button type="submit" className=" justify-content-center btn bg-stay-secondary border-none mt-3 mb-3 md:w-[110px] sm:w-[110px] font-medium md:text-md sm:text-xs">
          Finish
        </button>
      </div>
    </form>
  );
};

export default FormBooking;
