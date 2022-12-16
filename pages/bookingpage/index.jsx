import React, { useEffect, useState } from 'react';
import BookingCard from '../../Components/BookingCard';
import api from '../../services/api';
import Cookies from 'js-cookie';
import Layout from '../../Components/Layout';

function index() {
  const [cards, setCards] = useState([]);
  const [payment, setPayment] = useState();

  const getCard = async () => {
    await api.getCard(Cookies.get('userToken'), Cookies.get('id_user'))
      .then(response => {
        setCards(response.data.data)
        console.log(response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  const start_date = Cookies.get('start_date');
  const end_date = Cookies.get('end_date');
  const villa_id = Cookies.get('villa_id');

  const addReservation = async() => {
    await api.addReservation(Cookies.get('userToken'), {payment, start_date, end_date, villa_id})
      .then(response => {
        console.log(response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const onSubmitFinish = (e) => {
    e.preventDefault();
    addReservation();
  }

  useEffect(() => {
    getCard();
  }, []);

  return (
    <Layout page='Payment'>

        <div>
          <h1 className="text-primary text-xl font-bold text-center mt-5"> Booking Information</h1>
          <h5 className="text-secondary text-md font-thin text-center mt-3"> Please fill up the blank fields below</h5>
        </div>

        <section className=" grid grid-cols-2 gap-6 my-10">
          <div>
            <BookingCard />
          </div>
          <form onSubmit={(e) => onSubmitFinish(e)} className="mb-0 my-2 mx-3 " method="POST ">
            <div className="form-control w-full mb-6">
              <label className="label font-medium text-md ">Select Payment Methods</label>
              <select value={payment} onChange={(e) => setPayment(e.target.value)} className="select w-full border border-[#00000042]">
                {cards.map(card => (
                  <option value={card.id}>{card.type}+{card.name}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end items-end">
              <button type="submit" className=" justify-content-center btn bg-stay-secondary border-none mt-3 mb-3 md:w-[110px] sm:w-[110px] font-medium md:text-md sm:text-xs">
                Finish
              </button>
            </div>
          </form>
        </section>
    </Layout>
  );
}

export default index;
