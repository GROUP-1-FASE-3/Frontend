import React from 'react';
import Image from 'next/image';

const myLoader = ({ src }) => {
  return `${src}`;
};

const CardHome = ({ villa_name, address, price, imgUrl, onDetail }) => {
  return (
    <div className="card-compact shadow bg-white rounded-xl">
      <figure className="relative xl:w-full xl:h-[150px] md:w-[180px] md:h-[100px] rounded-2xl">
        <Image loader={myLoader} src={imgUrl} fill className="rounded-2xl object-cover" alt="imgCard" />
      </figure>
      <div className="card-body self-end">
        <div className="flex items-center mt-3 text-yellow-400">
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
        <h2 className="font-bold lg:text-2xl md:text-xl">{villa_name}</h2>
        <p className="font-semibold">${price}</p>
        <p className="text-stay-grey flex">
          <svg className="mr-2 " width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 -9.15527e-05C3.13 -9.15527e-05 0 3.12991 0 6.99991C0 12.2499 7 19.9999 7 19.9999C7 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7 -9.15527e-05ZM7 9.49991C5.62 9.49991 4.5 8.37991 4.5 6.99991C4.5 5.61991 5.62 4.49991 7 4.49991C8.38 4.49991 9.5 5.61991 9.5 6.99991C9.5 8.37991 8.38 9.49991 7 9.49991Z"
              fill="#848484"
            />
          </svg>
          {address}
        </p>
        <div className="card-actions mt-10 justify-center">
          <button onClick={onDetail} className="btn bg-stay-secondary border-none text-white lg:w-[45%] md:w-full md:text-xs">
            Book Now
          </button>
          <button onClick={onDetail} className="btn bg-transparent hover:bg-transparent border-none text-stay-secondary lg:w-1/2 md:w-full md:text-xs">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
