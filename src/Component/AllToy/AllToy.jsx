import React, { useEffect, useState } from "react";
import Toys from "./Toys";
import useTitle from "../OtherPage/useTitle";

const AllToy = () => {
  useTitle('AllToy')
  const [data, setData] = useState([]);
  const [showAll,setShow] = useState(false);
  const handleShowAll = () =>{
        setShow(true)
  }
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((toys) => {
        setData(toys);
      });
  }, []);
  return (
    <div>
     <div className="form-control mx-auto">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>

      <div className="grid grid-cols-3 gap-5">
        {data.slice(0,showAll ?50 :14).map((d) => (
          <Toys key={d._id} toys={d}></Toys>
        ))}
      </div>
      <div className="text-center m-5">
         {!showAll && (
                <button onClick={handleShowAll} className='btn'>Show All</button>
            )}
      </div>
    
    </div>
  );
};

export default AllToy;
