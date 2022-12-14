import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import HeroComponent from '../../Components/HeroComponent';
import MultiImageInput from 'react-multiple-image-input';
import 'regenerator-runtime/runtime'
import api from '../../services/api';
import { useSelector } from 'react-redux';

const AddPage = () => {
    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100"
    };
    
    const currentUsers = useSelector((state) => state.users.currentUser)
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [guest, setGuest] = useState();
    const [bedroom, setBedroom] = useState();
    const [bed, setBed] = useState();
    const [villa_name, setVillaName] = useState('');
    const [villa_image1, setVillaImage1] = useState('');
    const [villa_image2, setVillaImage2] = useState('');
    const [villa_image3, setVillaImage3] = useState('');
    const [kitchen, setKitchen] = useState('not-available');
    const [pool, setPool] = useState('not-available');
    const [wifi, setWifi] = useState('not-available');
    const token = localStorage.getItem('userToken');
    const id = currentUsers.id;
    const user_name = currentUsers.user_name;
    const newBed = parseInt(bed);
    const newPrice = parseInt(price);
    const newGuest = parseInt(guest);
    const newBedroom = parseInt(bedroom);


    const [images, setImages] = useState({});

    const AddVillaHandler = async() => {
        await api.AddVilla(token, {villa_name, newPrice, description, address, newGuest, newBedroom, newBed, kitchen, pool, wifi, villa_image1, villa_image2, villa_image3, id, user_name})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const onSubmitAddVilla = (e) => {
        AddVillaHandler();
        e.preventDefault();
        console.log({villa_name, price, description, address, guest, bedroom, bed, kitchen, pool, wifi});
    }

    const onCheckedWifi = (e) => {
        if(e.target.checked) {
            setWifi('available')
        }else{
            setWifi('not-available')
        }
    }

    const onCheckedPool = (e) => {
        if(e.target.checked) {
            setPool('available')
        }else{
            setPool('not-available')
        }
    }

    const onCheckedKitchen = (e) => {
        if(e.target.checked) {
            setKitchen('available')
        }else{
            setKitchen('not-available')
        }
    }
    return (
        <Layout page='Listing'>
            <HeroComponent
                button='Next'
                imgSrc='/images/add_property.jpg'
                title={<h1 className='text-4xl text-stay-primary font-semibold'>Tell us about your place</h1>}
                desc={<p className='text-blue-200 mt-5 text-stay-grey text-xl'>In this step, we`ll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>}
            />
            <form onSubmit={(e) => onSubmitAddVilla(e)} className="information lg:m-10 md:my-10 md:mx-5 text-stay-primary">
                <h1 className='text-4xl font-semibold mb-10'>Information</h1>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">What is your Villa name?</label>
                    <input type="text" placeholder='Villa Name' value={villa_name} onChange={(e) => setVillaName(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">How much is the rent?</label>
                    <input type="number" placeholder='$3000' value={price} onChange={(e) => setPrice(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Where`s your place located?</label>
                    <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Detail Properties</label>
                    <input type="number" placeholder='How many guests  your property can provide?' value={guest} onChange={(e) => setGuest(e.target.value)} className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <input type="number" placeholder='How many bedrooms  your property can provide?' value={bedroom} onChange={(e) => setBedroom(e.target.value)} className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <input type="number" placeholder='How many beds  your property can provide?' value={bed} onChange={(e) => setBed(e.target.value)} className="input input-bordered w-full mb-3 border-[#00000042]" />
                </div>
                <div className="w-full flex md:flex-wrap sm:flex-wrap xs:flex-wrap lg:gap-10 md:gap-5 items-center">
                    <label className="label font-medium text-xl xl:w-auto lg:w-full md:w-full sm:w-full xs:w-full">What your place has to offer?</label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedWifi(e)} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5 xs:mr-5 xs:ml-0" />
                            <span className="label-text text-base font-semibold text-stay-primary">WiFi</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedPool(e)} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">Pool</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedKitchen(e)} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">Kitchen</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">Workspace</span>
                        </label>
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl text-stay-primary font-medium mb-3'>Add some photos of your place</h2>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        allowCrop={false}
                        theme={"light"}
                        cropConfig={{ crop, ruleOfThirds: true }}
                        className='border-none'
                    />
                </div>
                <div className="form-control w-full mt-5">
                    <label className="label font-medium text-xl pb-3">Create your description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="input input-bordered w-full border-[#00000042] h-[200px] resize-none" placeholder='Description'>{description}</textarea>
                </div>
                <div className="text-end mt-10">
                    <button className='bg-stay-secondary w-[200px] h-[50px] text-white font-medium text-[18px] rounded'>Save</button>
                </div>
            </form>
        </Layout >
    );
}

export default AddPage;
