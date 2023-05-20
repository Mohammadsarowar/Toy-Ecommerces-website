import React, { useEffect, useState } from "react";
import Category from "./Category";

const CatagoryToy = () => {
  const [activeTab, setActiveTab] = useState("Private Car");
  const [toys, setToys] = useState([]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);
  const result = toys?.filter((toy) => toy.toy_name == activeTab);
  console.log(result);
  return (
    <div>
      <div>
        {" "}
        <div className="text-center my-5">
          <div
            onClick={() => handleTabClick("Private Car")}
            className={`tab  tab2 remote ${
              activeTab == "Private Car" ? "bg-black text-white" : ""
            }`}
          >
            Private Car
          </div>
          <div
            onClick={() => handleTabClick("Bus")}
            className={`tab  tab2 Offline ${
              activeTab == "Bus" ? " bg-black text-white" : ""
            }`}
          >
            Bus
          </div>
          <div
            onClick={() => handleTabClick("Toy Airplane")}
            className={`tab  tab2 Offline ${
              activeTab == "Toy Airplane" ? " bg-black text-white" : ""
            }`}
          >
            Toy Airplane
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
          {result.map((d) => (
            <Category key={d._id} data={d}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatagoryToy;
