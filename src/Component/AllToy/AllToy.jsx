import React, { useEffect, useState } from "react";
import Toys from "./Toys";

const AllToy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((toys) => {
        setData(toys);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <input type="submit" placeholder="Type here" className="btn ml-5" />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {data.map((d) => (
          <Toys key={d._id} toys={d}></Toys>
        ))}
      </div>
    </div>
  );
};

export default AllToy;
