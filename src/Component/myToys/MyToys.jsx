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
 

  useEffect(()=>{
    fetch(`https://toy-marketplace-server-mdsarowarhang-gmailcom.vercel.app/myToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
      setJobs(data);
    })
  },[user])

  const handleDelete =(id) => {
    fetch(` https://toy-marketplace-server-teal.vercel.app/toyDelete/${id}`,{
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
   const handleUpdate = (id) => {
    fetch(` https://toy-marketplace-server-teal.vercel.app/update/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount > 0) {
        //update staet
        const remaining = jobs.filter(booking => booking._id !==id)
        const update = jobs.find(booking=>booking._id==id)
        update.status = 'confirm'
        const newUpdate = [update,...remaining];
        setJobs(newUpdate)
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
      jobs.map(d=><Table key={d._id} handleUpdate={handleUpdate} handleDelete={handleDelete} data={d}></Table>)
       }
      </tbody>
    
      
    </table>
  </div>
  );
};

export default MyToys;