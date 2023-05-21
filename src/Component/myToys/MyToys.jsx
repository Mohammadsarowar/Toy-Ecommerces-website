import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../OtherPage/useTitle';

const MyToys = () => {
   useTitle('MyToys')
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  // useEffect(() => {
  //     fetch(`https://toy-marketplace-server-mdsarowarhang-gmailcom.vercel.app/myToys/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
          
  //         setJobs(data);
  //     }, []);
  //       });
  return (
    <div>
      
    </div>
  );
};

export default MyToys;