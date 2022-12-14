import React, { useState } from 'react';
import Layout from '../../Components/Layout';
import HeroComponent from '../../Components/HeroComponent';
import MultiImageInput from 'react-multiple-image-input';
import 'regenerator-runtime/runtime'

const AddPage = () => {
    const crop = {
        unit: "%",
        aspect: 4 / 3,
        width: "100"
    };

    const [images, setImages] = useState({});
    return (
        <Layout page='Listing'>
            <HeroComponent
                button='Next'
                imgSrc='/images/add_property.jpg'
                title={<h1 className='text-4xl text-stay-primary font-semibold'>Tell us about your place</h1>}
                desc={<p className='text-blue-200 mt-5 text-stay-grey text-xl'>In this step, we`ll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>}
            />
            <form className="information lg:m-10 md:my-10 md:mx-5 text-stay-primary">
                <h1 className='text-4xl font-semibold mb-10'>Information</h1>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Which of these best describes your place?</label>
                    <select className="select w-full border border-[#00000042]">
                        <option disabled selected></option>
                        <option>House</option>
                        <option>Villa</option>
                        <option>Tiny Home</option>
                        <option>Private Tent</option>
                        <option>Apartment</option>
                    </select>
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">What type of place will guests have?</label>
                    <select className="select w-full border border-[#00000042]">
                        <option disabled selected></option>
                        <option>An Entire Plaza</option>
                        <option>A Private Room</option>
                        <option>A Shared Room</option>
                    </select>
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Where`s your place located?</label>
                    <input type="text" className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Detail Properties</label>
                    <input type="text" placeholder='How many guests  your property can provide?' className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <input type="text" placeholder='How many bedrooms  your property can provide?' className="input input-bordered w-full mb-6 border-[#00000042]" />
                    <input type="text" placeholder='How many beds  your property can provide?' className="input input-bordered w-full mb-3 border-[#00000042]" />
                </div>
                <div className="w-full flex md:flex-wrap sm:flex-wrap xs:flex-wrap lg:gap-10 md:gap-5 items-center">
                    <label className="label font-medium text-xl xl:w-auto lg:w-full md:w-full sm:w-full xs:w-full">What your place has to offer?</label>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5 xs:mr-5 xs:ml-0" />
                            <span className="label-text text-base font-semibold text-stay-primary">WiFi</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
                            <span className="label-text text-base font-semibold text-stay-primary">TV</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="hover:bg-white cursor-pointer w-7 h-7 border-[#00000042] checked:hover:bg-stay-primary checked:focus:bg-stay-primary focus:outline-none rounded-md checked:bg-stay-primary mx-5" />
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
                <div className="form-control w-full mt-10">
                    <label className="label font-medium text-xl pb-3">What is your property title?</label>
                    <input type="text" className="input input-bordered w-full border-[#00000042]" />
                </div>
                <div className="form-control w-full mt-5">
                    <label className="label font-medium text-xl pb-3">Create your description</label>
                    <textarea type="text" className="input input-bordered w-full border-[#00000042] h-[200px] resize-none"></textarea>
                </div>
                <div className="text-end mt-10">
                    <button className='bg-stay-secondary w-[200px] h-[50px] text-white font-medium text-[18px] rounded'>Save</button>
                </div>
            </form>
        </Layout >
    );
}

export default AddPage;
