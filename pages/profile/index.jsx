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
        <div className='my-20 container mx-auto'>
          <h1 className='font-bold text-3xl text-stay-primary'>Property Management</h1>
          <button className='mt-20 btn bg-stay-primary text-white'>Add new</button>
          <TableBodyProfile
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index