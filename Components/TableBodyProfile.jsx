import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import ModalEditProperty from './ModalEditProperty';
import { BiEditAlt } from 'react-icons/bi';

const TableBodyProfile = ({ vila_name, address, detail_bedroom, price, onEdit, onDelete }) => {
    return (

        <tbody>
            <tr>
                <td>{vila_name}</td>
                <td>{address}</td>
                <td>{detail_bedroom}</td>
                <td>{price}</td>
                <td><button onClick={onEdit}><BiEditAlt /></button></td>
                <td><button onClick={onDelete}><MdDeleteForever className='cursor-pointer'/></button></td>
            </tr>
        </tbody>
    )
}

export default TableBodyProfile
