import React, {useState} from 'react';
import Layout from '../../../Components/Layout';
import api from '../../../services/api';
import Router from 'next/router';
import axios from 'axios';
import cookies from 'js-cookie';
import Swal from "sweetalert2";

const Edit = ({ villa }) => {
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
    const detail_bed = parseInt(bed);
    const price = parseInt(prices);
    const detail_guest = parseInt(guest);
    const detail_bedroom = parseInt(bedroom);
    const detail_bath = parseInt(bath);
    const token = cookies.get('userToken');

    const refresh = () => {
        Router.push({
            pathname: `/profile`
        })
    }

    const UpdateVillaHandler = async () => {
        const data = new FormData();
        data.append('villa_name', villa_name);
        data.append('price', price ? price : villa.price);
        data.append('description', description ? description : villa.description);
        data.append('address', address ? address : villa.address);
        data.append('villa_images1', villa_images1 ? villa_images1 : villa.villa_images1);
        data.append('villa_images2', villa_images2 ? villa_images2 : villa.villa_images2);
        data.append('villa_images3', villa_images3 ? villa_images3 : villa.villa_images3);
        data.append('detail_guest', detail_guest ? detail_guest : villa.detail_guest);
        data.append('detail_bedroom', detail_bedroom ? detail_bedroom : villa.detail_bedroom);
        data.append('detail_bed', detail_bed ?  detail_bed : villa.detail_bed);
        data.append('detail_bath', detail_bath ? detail_bath : villa.detail_bath);
        data.append('detail_kitchen', detail_kitchen ? detail_kitchen : villa.detail_kitchen);
        data.append('detail_pool', detail_pool ? detail_pool : villa.detail_pool);
        data.append('detail_wifi', detail_wifi ? detail_wifi : villa.detail_wifi);
        data.append('detail_workspace', detail_workspace ? detail_workspace : villa.detail_workspace);

        // await api.AddVilla(token, data)
        await axios.put(`https://rubahmerah.site/villas/${villa.id}`, data, {
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
                        text: "Update Villa Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
                refresh()
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Update Villa",
                    showConfirmButton: true,
                });
            })
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

    const onSubmitAddVilla = (e) => {
        e.preventDefault();
        UpdateVillaHandler();
    }

    return (
        <Layout page='Listing'>
            <form onSubmit={(e) => onSubmitAddVilla(e)} className="information lg:m-10 md:my-10 md:mx-5 text-stay-primary">
                <h1 className='text-4xl font-semibold mb-10'>Information</h1>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">What is your Villa name?</label>
                    <input type="text" placeholder={villa.vila_name} value={villa_name} onChange={(e) => setVillaName(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">How much is the rent?</label>
                    <input type="number" placeholder={villa.price} value={prices} onChange={(e) => setPrice(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Where`s your place located?</label>
                    <input type="text" placeholder={villa.address} value={address} onChange={(e) => setAddress(e.target.value)} className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Detail Properties</label>
                    <label className="label font-medium text-base pb-3">Detail Guest</label>
                    <input type="number" placeholder={villa.detail_guest} value={guest} onChange={(e) => setGuest(e.target.value)} className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <label className="label font-medium text-base pb-3">Detail Bedroom</label>
                    <input type="number" placeholder={villa.detail_bedroom} value={bedroom} onChange={(e) => setBedroom(e.target.value)} className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <label className="label font-medium text-base pb-3">Detail Bed</label>
                    <input type="number" placeholder={villa.detail_bed} value={bed} onChange={(e) => setBed(e.target.value)} className="input input-bordered w-full mb-3 border-[#00000042]" />
                    <label className="label font-medium text-base pb-3">Detail Bath Room</label>
                    <input type="number" placeholder={villa.detail_bath} value={bath} onChange={(e) => setBath(e.target.value)} className="input input-bordered w-full mb-3 border-[#00000042]" />
                </div>
                <div className="w-full flex md:flex-wrap sm:flex-wrap xs:flex-wrap lg:gap-10 md:gap-5 items-center">
                    <label className="label font-medium text-xl xl:w-auto lg:w-full md:w-full sm:w-full xs:w-full">What your place has to offer?</label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedWifi(e)} checked={villa.detail_workspace === 'available' && true} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5 xs:mr-5 xs:ml-0" />
                            <span className="label-text text-base font-semibold text-stay-primary">WiFi</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedPool(e)} checked={villa.detail_workspace === 'available' && true} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">Pool</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedKitchen(e)} checked={villa.detail_workspace === 'available' && true} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">Kitchen</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" onChange={(e) => onCheckedWorkspace(e)} checked={villa.detail_workspace === 'available' && true} className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
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
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="input input-bordered w-full border-[#00000042] h-[200px] resize-none" placeholder={villa.description}>{description}</textarea>
                </div>
                <div className="text-end mt-10">
                    <button className='bg-stay-secondary w-[200px] h-[50px] text-white font-medium text-[18px] rounded'>Save</button>
                </div>
            </form>
        </Layout >
    );
}

export async function getServerSideProps({ req, params }) {
    const token = req.cookies.userToken;
    const result = await api.getVillaById(token, params.id)
    const data = result.data.data
    return {
        props: {
            villa: data
        }
    }
}

export default Edit;
