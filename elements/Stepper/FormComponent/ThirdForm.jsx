const ThirdForm = ({ onChange, formValues }) => {
  return (
    <div className="w-1/2 justify-center mx-auto">
      <form className="bg-white shadow-md  px-24 pt-16 pb-10 mb-8 rounded-md ">
        <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-black-500 pb-8 font-bold text-2xl text-center">Booking Information</h1>
          <h1 className="text-slate-300 mx-8   font-thin text-xs text-center">Please Fill Up the Form Below</h1>
        </div>

        <div className="flex justify-items-center content-center items-center">
          <label className="block text-gray-700 px-2  text-sm font-bold mb-2" htmlFor="Terms">
            Final Confirmation
          </label>

          <input name="terms" value={formValues.terms} onChange={onChange} className="shadow cursor-pointer border rounded" type="checkbox"></input>
          <div className="flex items-center justify-between">
            <p>I have checked my order and agreed to all applicable ticket ordering regulations </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThirdForm;
