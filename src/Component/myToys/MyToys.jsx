import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  // useEffect(() => {
  //     fetch(`http://localhost:5000/myToys/${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setJobs(data);
  //     }, []);
  //       });
  return (
    <div>
      
    </div>
  );
};

export default MyToys;