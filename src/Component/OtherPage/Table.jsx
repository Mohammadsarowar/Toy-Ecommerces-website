import React, { useState } from 'react';
import UpdateModal from './UpdateModal';
import Swal from 'sweetalert2'
const Table = ({data,handleDelete,handleUpdate}) => {
    const [modalShow, setModalShow] = useState(false);
  
    const {
        _id,
        description,
        picture_url,
        price,
        quantity,
        rating,
        seller_email,
        seller_name,
        toy_name,
      } = data;


  
    return (
        <div>
             <tr>
        <th>1</th>
          
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={picture_url} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              
            </div>
          </td>
          <td>
           
            <span className="badge badge-ghost badge-sm">{seller_name}</span>
          </td>
          <td>{seller_email}</td>
          <td>{quantity}</td>
          <td>{rating}</td>
          <td>{price}</td>
          <th>
            {/* <button  onClick={() => setModalShow(true)} className="btn btn-ghost btn-md bold ">Update
            
            </button> */}
            <UpdateModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    props ={data}
                    handleUpdate={handleUpdate}
                  />
          </th>
          <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-md bold ">Delate</button>
          </th>
        </tr>
        </div>
    );
};

export default Table;