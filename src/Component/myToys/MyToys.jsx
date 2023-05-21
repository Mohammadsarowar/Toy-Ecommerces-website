import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../OtherPage/useTitle';
import UpdateModal from '../OtherPage/UpdateModal';

const MyToys = () => {
   useTitle('MyToys')
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  console.log(jobs);
  const handleUpdate = () => {
      
  }
  // useEffect(() => {
  //     fetch(`https://toy-marketplace-server-mdsarowarhang-gmailcom.vercel.app/myToys/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
          
  //         setJobs(data);
  //     }, []);
  //       });
  return (
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
      {/* head */}
      <thead>
      <tr>
                  <th>Serial</th>
                  <th>Picture</th>
                  <th>Seller-Name</th>
                  <th>Seller-Email</th>
                  <th>Quantity</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delate</th>
                </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
        <th>1</th>
          
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br/>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Purple</td>
          <td>Purple</td>
          <td>Purple</td>
          <td>Purple</td>
          <th>
            {/* <button  onClick={() => setModalShow(true)} className="btn btn-ghost btn-md bold ">Update
            
            </button> */}
            <UpdateModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    jobs={jobs}
                    handleUpdate={handleUpdate}
                  />
          </th>
          <th>
            <button  className="btn btn-ghost btn-md bold ">Delate</button>
          </th>
        </tr>
      </tbody>
    
      
    </table>
  </div>
  );
};

export default MyToys;