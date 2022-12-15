import React from 'react';
import Image from 'next/image';

const FacilitiesCard = () => {
    return (
        <div className="container w-1/2 grid grid-rows-2">
            <h2>Facilities</h2>
            <div className="grid grid-cols-4">
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_guest.svg' width={31} height={36} alt="ic_guest" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">8</p>
                        <p className="col">guest</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_bedroom.svg' width={31} height={36} alt="icon bedroom" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">8</p>
                        <p className="col">bedrooms</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_bedroom.svg' width={31} height={36} alt="icon bed" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">8</p>
                        <p className="col">bed</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_bath.svg' width={31} height={36} alt="icon bathroom" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">4</p>
                        <p className="col">bathroom</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 mt-5">
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_wifi.svg' width={31} height={36} alt="icon wifi" className="justify-content-center" />
                    <div className="grid  mt-2 ">
                        <p className="col ml-2">wifi</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_ac.svg' width={31} height={36} alt="icon ac" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">5</p>
                        <p className="col">AC</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_kitchen.svg' width={31} height={36} alt="icon kitchen" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">1</p>
                        <p className="col">kitcen</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_tv.svg' width={31} height={36} alt="icon tv" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">3</p>
                        <p className="col">TV</p>
                    </div>
                </div>
                <div className="card w-14 bg-base-100 ">
                    <Image src='/images/icons/ic_pool.svg' width={31} height={36} alt="icon pool" className="justify-content-center" />
                    <div className="grid grid-cols-2 mt-2 ">
                        <p className="col">1</p>
                        <p className="col">pool</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacilitiesCard;
