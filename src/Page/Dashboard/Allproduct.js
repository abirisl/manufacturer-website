import React from 'react';

const Allproduct = ({product, index, handleDelete}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{product.name}</td>
        <td><img className='w-16' src={product.img} alt="" /></td>
        <td>{product.prize}</td>
        <td>{product.quantity}</td>
        <td><button className='btn btn-info'>DELETE</button></td>
    </tr>
    );
};

export default Allproduct;