import React from "react";
import { FaBeer, FaDollarSign } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useTitle from "../OtherPage/useTitle";
const Toys = ({ toys }) => {
  useTitle('Toys')
  const { _id,picture_url,seller_email,toy_name,quantity,price,description  } = toys

  return (
    <>
  
    <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
  <figure><img src={picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {toy_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Quantity: {quantity}</div>
      <div className="badge badge-outline"><FaDollarSign />{price}</div>
    </div>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}>
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
    </div>
  </div>
</div>
    </>
  );
};

export default Toys;
