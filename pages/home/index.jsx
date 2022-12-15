import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Image from 'next/image';
import { GoLocation } from 'react-icons/go';
import CardHome from '../../Components/CardHome';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import Cookies from 'js-cookie';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import Router from 'next/router';

const HomePage = () => {
  const router = useRouter();
  const currentUsers = useSelector((state) => state.users.currentUser);
  const [villas, setVillas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(12);
  const [loading, setLoading] = useState(true);

  const lastUserIndex = currentPage * userPerPage;
  const firstUserIndex = lastUserIndex - userPerPage;
  const currentUser = villas?.slice(firstUserIndex, lastUserIndex);
  const disabled = currentPage === Math.ceil(villas?.length / userPerPage) ? true : false;
  const firstDisabled = currentPage === 1 ? true : false;

  const token = Cookies.get('userToken');

  const onDetail = (id) => {
    Router.push({
      pathname: `/villa/${id}`,
    });
  };
  // console.log(movies)
  // console.log(token)
  const getVillas = async () => {
    await api .getVillas(token)
      
      .then((response) => {
        setVillas(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  // console.log(villas)
  useEffect(() => {
    getVillas();
    if (!localStorage.getItem('userToken')) {
      router.push('/login');
    }
  }, [Cookies.get('userToken')]);

  return (
    <div className="max-w-screen">
      {loading && <div>Loading</div>}
      {!loading && (
        <>
          <Navbar />
          <div className="mt-10 md:container pl-12 md:mx-auto md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row gap-12 justify-between">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl text-primary font-bold">
                  Some of your best ideas
                  <br /> come when
                  <br /> you're on Staycation.{' '}
                </h1>
                <p className="text-blue-200 mt-5 text-secondary text-xl">
                  We provide what you need to enjoy your
                  <br />
                  holiday with family. Time to make another
                  <br />
                  memorable moments.
                </p>
                <button className="btn bg-stay-secondary border-none mt-5 mb-5 w-[210px]">Show me Now</button>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[300px] border-none">
                  <Image className="" src="/images/picture.png" alt="home" fill />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h1 className="text-xl ml-20 pl-20 text-blue-900 font-bold text-stay-primary">Most Rated</h1>
            <div className="flex justify-center items-center mt-10">
              <div className="grid grid-cols-3 p-5">
                <div className="relative overflow-hidden">
                  <Image className="border-none rounded-2xl px-3 h-[360px]" src="/images/dumy-home.png" alt="stay" width={400} height={200} />
                  <div className="absolute ml-10 py-2.5 bottom-0  bg-blue-400 text-white text-left">
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
                    <h1 className="font-bold text-lg">Blue Origin Fams</h1>
                    <p className="flex">
                      <GoLocation className="mt-1" />
                      Bali, Indonesia
                    </p>
                  </div>
                </div>
                <Image className="border-none rounded-2xl px-3 h-[360px]" src="/images/dumy-home.png" alt="hotels" width={400} height={200} />
                <Image className="border-none rounded-2xl px-3 h-[360px]" src="/images/dumy-home.png" alt="villa" width={400} height={200} />
              </div>
            </div>
          </div>
          <div className="my-20 w-full container mx-auto px-14">
            <h1 className="text-2xl text-primary font-bold">Hotels with large living room</h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-y-10 gap-x-7 mt-20">
              {currentUser.map((villa) => (
                <CardHome onDetail={() => onDetail(villa.id)} address={villa.address} price={villa.price} villa_name={villa.vila_name} key={villa.id} imgUrl={villa.villa_images1} />
              ))}
            </div>
            <div className="ml-auto mr-20 mt-10 pr-10 w-[30px]">
              <div className="flex content-center">
                <div>
                  <label className="text-end text-lg mr-5 text-black" htmlFor="">
                    {currentPage}/{Math.ceil(villas?.length / userPerPage)}
                  </label>
                </div>
                <div className="flex">
                  <button disabled={firstDisabled} onClick={() => setCurrentPage(currentPage - 1)} className={`${firstDisabled ? `cursor text-secondary` : `cursor-pointer text-black-default`} text-3xl`}>
                    <MdOutlineKeyboardArrowLeft />
                  </button>
                  <button disabled={disabled} onClick={() => setCurrentPage(currentPage + 1)} className={`${disabled ? `cursor text-secondary` : `cursor-pointer text-black-default`} text-3xl`}>
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center mb-10">
            <div className="grid grid-cols-2 px-3">
              <Image className="rounded-2xl pr-14" src="/images/family.png" alt="family" width={457} height={581} />
              <div className="mt-10">
                <p className="text-xl text-stay-primary">Happy Family</p>
                <div className="flex items-center mb-3 mt-5">
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
                <h1 className="text-stay-primary text-2xl">
                  What a great trip with my family and
                  <br />I should try again next time soon ...
                </h1>
                <p className="mt-5 text-stay-grey">Mitro, FrontEnd Engineer</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

// export async function getServerSideProps({req}) {
//     const token = req.cookies.userToken
//     const result = await api.getVillas(token)
//     // const result = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4cee0d1f3d660d8d420266c93e1f1e5d&language=en-US&page=1')
//     const data = await result.data
//     return {
//         props: {
//             movies: data
//         }
//     }
// }

export default HomePage;
