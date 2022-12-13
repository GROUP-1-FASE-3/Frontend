import React, {useState} from 'react';
import Layout from '../../Components/Layout';
import HeroComponent from '../../Components/HeroComponent';

const AddPage = () => {
    const [offer, setOffer] = useState('');
    const [offers, setOffers] = useState([]);
    const data = [''];

    const onAddOffer = (x) => {
        data.push(x);
    }
    console.log(data)

    return (
        <Layout page='Listing'>
            <HeroComponent
                button='Next'
                imgSrc='/images/add_property.jpg'
                title={<h1 className='text-4xl text-stay-primary font-bold'>Tell us about your place</h1>}
                desc={<p className='text-blue-200 mt-5 text-stay-grey text-xl'>In this step, we`ll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>}
            />
            <div className="information mx-10 text-stay-primary">
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
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label font-medium text-xl pb-3">Detail Properties</label>
                    <input type="text" placeholder='How many guests  your property can provide?' className="input input-bordered w-full mb-6" />
                    <input type="text" placeholder='How many bedrooms  your property can provide?' className="input input-bordered w-full mb-6" />
                    <input type="text" placeholder='How many beds  your property can provide?' className="input input-bordered w-full mb-3" />
                </div>
                <div className="w-full flex gap-10">
                    <label className="label w-1/2 max- w-full font-medium text-xl">What your place has to offer?</label>
                    <input type="text" className="input input-bordered w-full" value={offer} onChange={(e) => setOffer(e.target.value)} />
                    <button className='bg-stay-secondary text-white w-[134px] rounded' onClick={onAddOffer(offer)}>Add</button>
                </div>
                <div>
                    {data}
                </div>
            </div>
        </Layout>
    );
}

export default AddPage;
