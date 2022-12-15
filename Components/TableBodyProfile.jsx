import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import ModalEditProperty from './ModalEditProperty';

const TableBodyProfile = ({ vila_name, address, detail_bedroom, price }) => {
    return (

        <tbody>
            <tr>
                <td>{vila_name}</td>
                <td>{address}</td>
                <td>{detail_bedroom}</td>
                <td>{price}</td>
                <td><a><ModalEditProperty /></a></td>
                <td><a><MdDeleteForever className='cursor-pointer' /></a></td>
            </tr>
        </tbody>
    )
}

export default TableBodyProfile
