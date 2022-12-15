import React from 'react';
import Image from 'next/image';
import guest from '.././src/images/icons/ic_guest.svg';
import bedroom from '.././src/images/icons/ic_bedroom-1.svg';
import bathroom from '.././src/images/icons/ic_bathroom.svg';
import ac from '.././src/images/icons/ic_ac.svg';
import pool from '.././src/images/icons/ic_pool.svg';
import diningroom from '.././src/images/icons/ic_diningroom.svg';
import tv from '.././src/images/icons/ic_tv.svg';
import wifi from '.././src/images/icons/item.svg';
import axios from 'axios';
const FacilitiesCard = ({ detail_guest, detail_bedroom, detail_bed, detail_bath, detail_wifi, detail_kitchen, detail_pool }) => {
  return (
    <div className="container w-1/2 grid grid-rows-2">
      <h2>Facilities</h2>
      <div className="grid grid-cols-4">
        <div className="card w-14 bg-base-100 ">
          <Image src={guest} width={31} height={36} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">{detail_guest}</p>
            <p className="col">guest</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={bedroom} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">{detail_bedroom}</p>
            <p className="col">bedrooms</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={bedroom} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">{detail_bed}</p>
            <p className="col">bed</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={bathroom} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">{detail_bath}</p>
            <p className="col">bathroom</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 mt-5">
        <div className="card w-14 bg-base-100 ">
          <Image src={wifi} width={31} height={36} alt="ic_guest" className="justify-content-center" />
          <div className="grid  mt-2 ">
            <p className="col ml-2">{detail_wifi}</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={ac} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">5</p>
            <p className="col">AC</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={diningroom} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">{detail_kitchen}</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={tv} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">3</p>
            <p className="col">TV</p>
          </div>
        </div>
        <div className="card w-14 bg-base-100 ">
          <Image src={pool} alt="ic_guest" className="justify-content-center" />
          <div className="grid grid-cols-2 mt-2 ">
            <p className="col">{detail_pool}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesCard;
