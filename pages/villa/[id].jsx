import Navbar from '../../Components/Navbar';
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import api from '../../services/api';
import detail1 from '../../src/images/img-details-1.png';
import detail2 from '../../src/images/img-details-2.png';
import detail3 from '../../src/images/img-details-3.png';
import detail4 from '../../src/images/img-details-4.png';
import Footer from '../../Components/Footer';
import DatePicker from '../../Components/DatePicker';
import axios from 'axios';
import FacilitiesCard from '../../Components/FacilitiesCard';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Router from 'next/router';
import DatePickers from '../../Components/DatePicker';
import Layout from '../../Components/Layout';

const myLoader = ({ src }) => {
  return `${src}`;
};

function DetailPage({ villa }) {

  const [inDate, setInDate] = useState('');
  const [outDate, setOutDate] = useState('');
  const [price, setPrice] = useState();
  const [night, setNight] = useState('');


  const villa_id = parseInt(villa.id);

  const checkPrice = async () => {
    const IN = parseInt(inDate.substring(8));
    const OUT = parseInt(outDate.substring(8));
    let totalNight = parseInt(OUT - IN);
    setNight(totalNight)
    let totalPrice = parseInt(villa.price * totalNight)
    setPrice(totalPrice)
  }
  const onPayment = () => {
    Router.push({
      pathname: `/bookingpage`,
    });
  };

  console.log(price);

  const getReservationData = async () => {
    await api
      .getReservation(Cookies.get('userToken'), { villa_id, inDate, outDate })
      .then((response) => {
        checkPrice()
        const data = response.data;
        if (data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Room Available',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        Cookies.set('start_date', inDate);
        Cookies.set('end_date', outDate);
        Cookies.set('villa_id', villa.id);
        // onPayment();
      })

      .catch((error) => {
        console.log(error)
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No Room is Available',
          showConfirmButton: true,
        });
      });
  };

  return (
    <Layout page='Detail'>
      <div className="container mx-auto py-px-20">
        <section>
          <div className="mt-10 py-2.5 bottom-0  bg-blue-400 text-primary text-left">
            <div className="flex items-center mb-3">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h1 className="font-bold text-lg">{villa.vila_name}</h1>
            <p className="flex">
              <GoLocation className="mt-1" />
              {villa.address}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 my-10">
            <figure className="row-span-3 w-[643px] h-[500px]">
              <Image src={villa.villa_images1} loader={myLoader} alt="image 1" className="object-cover " width={643} height={200} />
            </figure>
            <div className=" row">
              <Image src={villa.villa_images2} loader={myLoader} alt="image 1" className="w-full  " width={643} height={400} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div className="col">
              <Image src={villa.villa_images3} loader={myLoader} alt="image 1" className="w-full  " width={643} height={500} />
            </div>
            <div className=" row">
              <Image src={villa.villa_images3} loader={myLoader} alt="image 1" className="w-full  " width={643} height={500} />
            </div>
            <div className="col">
              <Image src={villa.villa_images2} loader={myLoader} alt="image 1" className="w-cover  " width={643} height={500} />
            </div>
            <div className=" row">
              <Image src={detail3} alt="image 1" className="w-cover  " width={643} height={500} />
            </div>
          </div>
        </section>
        <div>
          <h3 className="text-primary text-bold mt-20">About the Place</h3>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col">
            <div className="grid grid-row-3 gap-4 text-secondary font-thin mt-5 mb-10 md:font-md sm:font-sm">
              <p className="row">{villa.description}</p>
              <p className="row">{villa.description}</p>
              <p className="row">{villa.description}</p>
            </div>
          </div>

          <div className="grid grid-cols grid-row-2 ">
            <div className=" flex justify-center">
              <div className="card w-96 bg-base-100 shadow-md">
                <div className="card-body justify-content-center mb-5 ">
                  <h2 className="font-bold  ">Start Booking Now</h2>
                  <div className="grid grid-cols-2 justify-content-center">
                    <h2 className="font-bold justify-text-end text-xl text-green-600">${villa.price}</h2>
                    <h2 className="text-bold justify-text-center text-secondary ">per night</h2>
                  </div>

                  {/* <p className="text-primary font-medium text-xs mt-5 mb-0">
                    how long will you stay? <DatePicker />
                  </p> */}
                  <p className="text-primary font-medium text-xs mb-0">
                    {/* pick a date <DatePickers value={value} handleValueChange={handleValueChange} /> */}
                    <div className='from-control'>
                      <label className='text-xl'>Check In</label> <br />
                      <input type="date" value={inDate} onChange={(e) => setInDate(e.target.value)} />
                    </div>
                    <div className='from-control'>
                      <label className='text-xl'>Check Out</label> <br />
                      <input type="date" value={outDate} onChange={(e) => setOutDate(e.target.value)} />
                    </div>
                  </p>
                  <button onClick={(onPayment) => getReservationData()} className=" justify-coontent-center btn bg-stay-secondary border-none mt-3 mb-3 md:w-[210px] sm:w-[110px] font-medium md:text-md sm:text-xs">
                    Check Date
                  </button>
                  {
                    price && (
                      <>
                        <div>Payment Total : {villa.price} x {night} = {price}</div>
                        <button onClick={()=>onPayment()} className=" justify-coontent-center btn bg-stay-secondary border-none mt-3 mb-3 md:w-[210px] sm:w-[110px] font-medium md:text-md sm:text-xs">Continue Booking</button>
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <FacilitiesCard
          detail_bath={villa.detail_bath}
          detail_bed={villa.detail_bed}
          detail_guest={villa.detail_guest}
          detail_bedroom={villa.detail_bedroom}
          detail_kitchen={villa.detail_kitchen}
          detail_pool={villa.detail_pool}
          detail_wifi={villa.detail_wifi}
        />
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ req, params }) {
  const token = req.cookies.userToken;
  // const result = await api.getVillaById(token, params.id);

  const result = await axios.get(`https://rubahmerah.site/villas/${params.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = result.data.data;
  return {
    props: {
      villa: data,
    },
  };
}

export default DetailPage;
