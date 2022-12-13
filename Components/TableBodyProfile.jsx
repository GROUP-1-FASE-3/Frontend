import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import ModalEditProperty from './ModalEditProperty';

const TableBodyProfile = () => {
    return (
        <div className="overflow-x-auto mt-20 mr-20">
            <table className="table w-[800px]">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Villa Bukit Mas</td>
                        <td>Malang</td>
                        <td>Villa</td>
                        <td>Full Booked</td>
                        <td><a><ModalEditProperty /></a></td>
                        <td><a><MdDeleteForever className='cursor-pointer' /></a></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Apartemen Gunawangsa</td>
                        <td>Surabaya</td>
                        <td>Apartment</td>
                        <td>Available</td>
                        <td><ModalEditProperty /></td>
                        <td><MdDeleteForever className='cursor-pointer' /></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Villa Sengkaling</td>
                        <td>Bali</td>
                        <td>Hotel</td>
                        <td>Available</td>
                        <td><ModalEditProperty /></td>
                        <td><MdDeleteForever className='cursor-pointer' /></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default TableBodyProfile
