import React, { useState } from 'react';
import FirstForm from '../Stepper/FormComponent/FirstForm';
import SecondForm from '../Stepper/FormComponent/SecondForm';
import ThirdForm from '../Stepper/FormComponent/ThirdForm';

const ParentComponent = () => {
  const formList = ['FirstForm', 'SecondForm', 'ThirdForm'];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    name: '',
    lastname: '',
    username: '',
    bank: '',
    sender: '',
    terms: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm formValues={values} onChange={onChange}></FirstForm>
          </div>
        );
      }
      case 1: {
        return <SecondForm formValues={values} onChange={onChange}></SecondForm>;
      }
      case 2: {
        return <ThirdForm formValues={values} onChange={onChange}></ThirdForm>;
      }
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
      console.log('form', values);
    }, 2000);
    return response;
  };

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case 'Booking Confirmation': {
        return setPage(0);
      }
      case 'Payment Confirmation': {
        return setPage(1);
      }
      case 'Finalization': {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div className="grid gap-4 justify-content-center items-center h-screen place-items-center ">
      <ul className="flex justify-between w-full">
        <li onClick={setForm} className={page === 0 ? 'bg-blue-300 w-2/6 rounded-lg  ' : 'bg: transparent'}>
          <div className="flex items-center ">
            <span className={page === 0 ? 'ml-2 text-white font-medium' : 'ml-2 text-blue-300 cursor-pointer'}>Booking Confirmation</span>
          </div>
        </li>
        <li onClick={setForm} className={page === 1 ? 'bg-blue-300  w-2/6 rounded-lg' : 'bg: transparent '}>
          <div className="flex items-center">
            <span className={page === 1 ? 'ml-2 text-white font-medium' : 'ml-2 text-blue-300 cursor-pointer'}>Payment Confirmation</span>
          </div>
        </li>
        <li onClick={setForm} className={page === 2 ? 'bg-blue-300 w-2/6 rounded-lg' : 'bg: transparent'}>
          <div className="flex items-center">
            <span className={page === 2 ? 'ml-2 text-white font-medium' : 'ml-2 text-blue-300 cursor-pointer'}> Finalization</span>
          </div>
        </li>
      </ul>
      <div className="flex-1">{handleForms()}</div>
      <div className="grid grid-cols-2 gap-4 place-content-center items-center">
        <button onClick={handlePrev} className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 " disabled={page === 0}>
          Prev
        </button>
        {page === 2 ? (
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        ) : (
          <button onClick={handleNext} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
