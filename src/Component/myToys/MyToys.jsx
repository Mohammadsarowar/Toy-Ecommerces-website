import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../OtherPage/useTitle';
import Swal from 'sweetalert2'
import Table from '../OtherPage/Table';

const MyToys = () => {
   useTitle('MyToys')
   const [remove,setRemove] = useState()
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const handleUpdate = () => {
      //
  }

  useEffect(()=>{
    fetch(`https://toy-marketplace-server-mdsarowarhang-gmailcom.vercel.app/myToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      setJobs(data);
    })
  },[user])

  const handleDelete =(id) => {

    fetch(`http://localhost:5000/toyDelete/${id}`,{
       method:"DELETE"
     })
     .then(res=>res.json())
     .then(data=>{
        Swal.fire({
       title: 'success!',
       text: 'Do you want to delete',
       icon: 'warning',
       confirmButtonText: 'Delete'
     })
     if(data.deletedCount>0){
      const remaining = jobs.filter(booking=>booking._id !== id)
      setRemove(remaining)
     }
     })
    
  
    

   }
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
       {
      jobs.map(d=><Table key={d._id} handleDelete={handleDelete} data={d}></Table>)
       }
      </tbody>
    
      
    </table>
  </div>
  );
};

export default MyToys;