const SecondForm = ({ formValues, onChange, option }) => {
  return (
    <div className="w-1/2 justify-center mx-auto">
      <div className="grid gap-4 place-content-center items-center">
        <h1 className="text-gray-700 pb-8 font-bold text-2xl">Payment</h1>
      </div>
      <form className="bg-white shadow-md  px-24 pt-16 pb-10 mb-8 rounded-md">
      <div className="grid gap-4 place-content-center items-center">
          <h1 className="text-black-500 pb-8 font-bold text-2xl text-center">Booking Information</h1>
          <h1 className="text-slate-300 mx-8   font-thin text-xs text-center">Please Fill Up the Form Below</h1>
        </div>
        <div class="flex justify-center mt-8">
          <div class="">
            <div class="m-4">
              <label class="inline-block mb-2 text-gray-500">Upload Bukti Transfer(jpg,png,svg,jpeg)</label>
              <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div class="flex flex-col items-center justify-center pt-7">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Select a photo</p>
                  </div>
                  <input type="file" class="opacity-0" />
                </label>
              </div>
            </div>
            <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Save</button>
            <div class="flex p-2 space-x-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Bank">
                  Asal Bank
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="bank"
                  name="bank"
                  type="text"
                  placeholder="Asal Bank"
                  value={formValues.bank}
                  onChange={onChange}
                ></input>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Sender">
                Nama Pengirim
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sender"
                type="text"
                name="sender"
                value={formValues.sender}
                onChange={onChange}
                placeholder="Sender"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecondForm;
