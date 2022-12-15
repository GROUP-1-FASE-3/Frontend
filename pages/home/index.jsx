import React, { useEffect } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Image from 'next/image';
import { GoLocation } from 'react-icons/go'
import CardHome from '../../Components/CardHome';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import Cookies from 'js-cookie';
import axios from 'axios';

const HomePage = ({ villas }) => {
    const router = useRouter()
    const currentUsers = useSelector((state) => state.users.currentUser)
    // console.log('tet', currentUsers)
    console.log(villas)
    useEffect(() => {
        if (!Cookies.get('userToken')) {
            router.push('/login')
        }
    }, [Cookies.get('userToken')])

    return (
        <div className='max-w-screen'>
            <Navbar />
            <div className='mt-10 md:container pl-12 md:mx-auto md:px-12 lg:px-20'>
                <div className='flex flex-col md:flex-row gap-12 justify-between'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-4xl text-stay-primary font-bold'>Some of your best ideas<br /> come when<br /> you're on Staycation. </h1>
                        <p className='text-blue-200 mt-5 text-stay-grey text-xl'>We provide what you need to enjoy your<br />
                            holiday with family. Time to make another<br />
                            memorable moments.</p>
                        <button className='btn bg-stay-secondary border-none mt-5 mb-5 w-[210px]'>Show me Now</button>
                    </div>
                    <div className='order-1 md:order-2'>
                        <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[300px] border-none'>
                            <Image className='' src="/images/picture.png" alt='home' fill />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <h1 className='text-xl ml-20 pl-20 text-blue-900 font-bold text-stay-primary'>Most Rated</h1>
                <div className='flex justify-center items-center mt-10'>
                    <div className='grid grid-cols-3 p-5'>
                        <div className='relative overflow-hidden'>
                            <Image className='border-none rounded-2xl px-3 h-[360px]' src="/images/dumy-home.png" alt='stay' width={400} height={200} />
                            <div className='absolute ml-10 py-2.5 bottom-0  bg-blue-400 text-white text-left'>
                                <div className="flex items-center mb-3">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <h1 className='font-bold text-lg'>Blue Origin Fams</h1>
                                <p className='flex'><GoLocation className='mt-1' />Bali, Indonesia</p>
                            </div>
                        </div>
                        <Image className='border-none rounded-2xl px-3 h-[360px]' src="/images/dumy-home.png" alt='hotels' width={400} height={200} />
                        <Image className='border-none rounded-2xl px-3 h-[360px]' src="/images/dumy-home.png" alt='villa' width={400} height={200} />
                    </div>
                </div>
            </div>
            <div className='mt-20 mb-20 w-full container mx-auto'>
                <h1 className='text-xl mx-auto ml-20 pl-20 text-blue-900 font-bold text-stay-primary'>Hotels with large living room</h1>
                <div className='flex justify-center items-center mt-10'>
                    <div className='flex gap-4 md:gap-12 flex-auto'>
                        <div className="grid grid-cols-4 gap-y-10 gap-x-5">
                            {
                                villas.map(villa => (
                                    <CardHome address={villa.address} price={villa.price} villa_name={villa.vila_name} key={villa.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex justify-center mb-10'>
                <div className='grid grid-cols-2 px-3'>
                    <Image className='rounded-2xl pr-14' src="/images/family.png" alt="family" width={457} height={581} />
                    <div className='mt-10'>
                        <p className='text-xl text-stay-primary'>Happy Family</p>
                        <div className="flex items-center mb-3 mt-5">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-star" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        <h1 className='text-stay-primary text-2xl'>What a great trip with my family and<br />
                            I should try again next time soon ...</h1>
                        <p className='mt-5 text-stay-grey'>Mitro, FrontEnd Engineer</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps({ req }) {
    const token = req.cookies.userToken
    const result = await api.getVillas(token);
    const data = await result.data.data
    return {
        props: {
            villas: data
        }
    }
}

export default HomePage