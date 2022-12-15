import Image from 'next/image';
import detail1 from '../../src/images/img-details-1.png';
const FirstForm = ({ formValues, onChange }) => {
  return (
    <div className="w-1/2 justify-center mx-auto">
      <div className="cols ">
        <Image src={detail1} alt="image 1" className="w-1/2  " width={643} height={500} />
      </div>
      <form className="bg-white shadow-md  px-24 pt-16 pb-10 mb-8 rounded-md">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-black-500 pb-8 font-bold text-2xl text-center">Booking Information</h1>
          <h1 className="text-slate-300 mx-8   font-thin text-xs text-center">Please Fill Up the Form Below</h1>
        </div>
        <div className="border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4">
          <label className=" text-sm text-primary font-light placeholder-gray-gray4 px-2 pt-1.5" htmlFor=" First Name">
            First Name
            <input className="rounded w-full py-5 px-3  text-slate-200 text-sm font-nedium" id="name" name="name" type="text" placeholder="first name" onChange={onChange} value={formValues.name}></input>
          </label>
        </div>
        <div className="mb-6">
          <label className="text-sm text-primary font-light placeholder-gray-gray4 px-2 pt-1.5" htmlFor="Last Name">
            LastName
            <input className="w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md" id="lastname" name="lastname" onChange={onChange} value={formValues.lastname} type="text" placeholder="Last Name"></input>
          </label>
        </div>

        <div className="mb-6">
          <label className="text-sm text-primary font-light placeholder-gray-gray4 px-2 pt-1.5" htmlFor="Last Name">
            Email
            <input className="w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md" id="email" name="email" onChange={onChange} value={formValues.email} type="email" placeholder="Email"></input>
          </label>
        </div>
      </form>
    </div>
  );
};

export default FirstForm;
