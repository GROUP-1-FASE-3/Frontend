import React from 'react'
import Footer from '../../Components/Footer'
import FormProfile from '../../Components/FormProfile'
import Navbar from '../../Components/Navbar'
import TableBodyProfile from '../../Components/TableBodyProfile'

const index = () => {
  return (
    <div>
      <Navbar />
      <div className='px-12 lg:px-28'>
        <FormProfile />
        <div className='mt-20 mb-20'>
          <h1 className='pl-20 ml-20 font-bold text-3xl text-stay-primary'>Property Management</h1>
          <div className='mt-10 flex justify-center'>
            <button className='btn bg-stay-primary text-white'>Add new</button>
            <TableBodyProfile
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index