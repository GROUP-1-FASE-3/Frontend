import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import HeroComponent from '../../Components/HeroComponent';
import MultiImageInput from 'react-multiple-image-input';
import 'regenerator-runtime/runtime'
import api from '../../services/api';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import cookies from 'js-cookie';
import Swal from "sweetalert2";
import Router from 'next/router';

const AddPage = () => {
    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100"
    };

    const [cookie, setCookie] = useCookies();
    const currentUsers = useSelector((state) => state.users.currentUser)
    const [errors, setErrors] = useState({});
    const [prices, setPrice] = useState();
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [guest, setGuest] = useState();
    const [bedroom, setBedroom] = useState();
    const [bed, setBed] = useState();
    const [villa_name, setVillaName] = useState('');
    const [villa_images1, setVillaImage1] = useState('');
    const [villa_images2, setVillaImage2] = useState('');
    const [villa_images3, setVillaImage3] = useState('');
    const [bath, setBath] = useState('')
    const [detail_kitchen, setKitchen] = useState('not-available');
    const [detail_pool, setPool] = useState('not-available');
    const [detail_wifi, setWifi] = useState('not-available');
    const [detail_workspace, setWorkspace] = useState('not-available');
    const token = cookies.get('userToken');
    const user_id = currentUsers.id;
    const detail_bed = parseInt(bed);
    const price = parseInt(prices);
    const detail_guest = parseInt(guest);
    const detail_bedroom = parseInt(bedroom);
    const detail_bath = parseInt(bath);


    let schema = Yup.object().shape({
        villa_name: Yup.string().required('Name villa is required'),
        address: Yup.string().required('Address is required'),
        description: Yup.string().required('Description is required'),
        detail_bath: Yup.number('Detail bath is number').required('Detail bath is required'),
        detail_bed: Yup.number('Detail bed is number').required('detail bed is required'),
        detail_bedroom: Yup.number('Detail bedroom is number').required('detail bedroom is required'),
        detail_guest: Yup.number('Detail guest is number').required('detail guest is required'),
        detail_kitchen: Yup.string().required('Detail kitchen is required'),
        detail_pool: Yup.string().required('Detail Pool is required'),
        detail_wifi: Yup.string().required('Detail Wifi is required'),
        price: Yup.number('Price is number').required('Price is required'),
    });

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    };

    const refresh = () => {
        Router.push({
            pathname: `/home`
        })
    }

    const AddVillaHandler = async () => {
        const data = new FormData();

        data.append('villa_name', villa_name);
        data.append('price', price);
        data.append('description', description);
        data.append('address', address);
        data.append('villa_images1', villa_images1);
        data.append('villa_images2', villa_images2);
        data.append('villa_images3', villa_images3);
        data.append('detail_guest', detail_guest);
        data.append('detail_bedroom', detail_bedroom);
        data.append('detail_bed', detail_bed);
        data.append('detail_bath', detail_bath);
        data.append('detail_kitchen', detail_kitchen);
        data.append('detail_pool', detail_pool);
        data.append('detail_wifi', detail_wifi);
        data.append('detail_workspace', detail_workspace);
        data.append('user_id', user_id);

        await axios.post(`https://rubahmerah.site/villas`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {
                const data = response.data
                if (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Add Payment Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
                refresh()
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Add Payment",
                    showConfirmButton: true,
                });
            })
    }

    const onSubmitAddVilla = (e) => {
        e.preventDefault();
        try {
            schema.validateSync(
                {
                    villa_name: villa_name,
                    address: address,
                    description: description,
                    detail_bath: detail_bath,
                    detail_bed: detail_bed,
                    detail_bedroom: detail_bedroom,
                    detail_guest: detail_guest,
                    detail_kitchen: detail_kitchen,
                    detail_pool: detail_pool,
                    detail_wifi: detail_wifi,
                    price: price
                },
                {
                    abortEarly: false
                }
            );
            AddVillaHandler();
        } catch (err) {
            const { inner } = err;
            let formErrors = {};

            if (inner && inner[0]) {
                inner.forEach(error => {
                    const { path, message } = error;

                    if (!formErrors[path]) {
                        formErrors[path] = message;
                    }
                });
            }
            setErrors(formErrors);
        }
    }

    const onCheckedWifi = (e) => {
        if (e.target.checked) {
            setWifi('available')
        } else {
            setWifi('not-available')
        }
    }

    const onCheckedPool = (e) => {
        if (e.target.checked) {
            setPool('available')
        } else {
            setPool('not-available')
        }
    }

    const onCheckedKitchen = (e) => {
        if (e.target.checked) {
            setKitchen('available')
        } else {
            setKitchen('not-available')
        }
    }

    const onCheckedWorkspace = (e) => {
        if (e.target.checked) {
            setWorkspace('available')
        } else {
            setWorkspace('not-available')
        }
    }

    const handleVillaImage1 = (e) => {
        const file = e.target.files[0];
        setVillaImage1(file)
    }

    const handleVillaImage2 = (e) => {
        const file = e.target.files[0];
        setVillaImage2(file)
    }

    const handleVillaImage3 = (e) => {
        const file = e.target.files[0];
        setVillaImage3(file)
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
                    <small className='text-error'>{errors.villa_name}</small>
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">How much is the rent?</label>
                    <input type="number" placeholder='$3000' value={prices} onChange={(e) => setPrice(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                    <small className='text-error'>{errors.price}</small>
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Where`s your place located?</label>
                    <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                    <small className='text-error'>{errors.address}</small>
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Detail Properties</label>
                    <input type="number" placeholder='How many guests your property can provide?' value={guest} onChange={(e) => setGuest(e.target.value)} className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <small className='text-error'>{errors.detail_guest}</small>
                    <input type="number" placeholder='How many bedrooms your property can provide?' value={bedroom} onChange={(e) => setBedroom(e.target.value)} className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <small className='text-error'>{errors.detail_bedroom}</small>
                    <input type="number" placeholder='How many beds your property can provide?' value={bed} onChange={(e) => setBed(e.target.value)} className="input input-bordered w-full mb-3 border-[#00000042]" />
                    <small className='text-error'>{errors.detail_bed}</small>
                    <input type="number" placeholder='How many bathroom your property can provide?' value={bath} onChange={(e) => setBath(e.target.value)} className="input input-bordered w-full mb-3 border-[#00000042]" />
                    <small className='text-error'>{errors.detail_bath}</small>
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
                            <input type="checkbox" onChange={(e) => onCheckedWorkspace(e)} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">Workspace</span>
                        </label>
                    </div>
                </div>
                <div className='mt-10'>
                    <h2 className='text-xl text-stay-primary font-medium mb-3'>Add some photos of your place</h2>
                    <input type="file" name='file1' onChange={(e) => handleVillaImage1(e)} id="" /> <br />
                    <input type="file" name='file2' onChange={(e) => handleVillaImage2(e)} id="" /> <br />
                    <input type="file" name='file3' onChange={(e) => handleVillaImage3(e)} id="" />
                </div>
                <div className="form-control w-full mt-5">
                    <label className="label font-medium text-xl pb-3">Create your description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="input input-bordered w-full border-[#00000042] h-[200px] resize-none" placeholder='Description'>{description}</textarea>
                    <small className='text-error'>{errors.description}</small>
                </div>
                <div className="text-end mt-10">
                    <button className='bg-stay-secondary w-[200px] h-[50px] text-white font-medium text-[18px] rounded'>Save</button>
                </div>
            </form>
        </Layout >
    );
}

export default AddPage;
