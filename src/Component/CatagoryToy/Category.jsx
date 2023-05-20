import React from "react";
import { Link } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { FaBeer, FaDollarSign, FaShoppingBasket } from "react-icons/fa";
const Category = ({ data }) => {
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          { toy_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h2 className="">
        <span className="bold">Seller-name :</span>  { seller_name}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <Square-3-stack-3d className="h-6 w-6 text-blue-500" />
            <FaShoppingBasket className="h-6 w-5 mr-1 text-blue-500" />
            {quantity}
          </div>
          <div className="badge badge-outline text-blue-500">
            <CurrencyDollarIcon className="h-6 w-5 text-blue-500" />
            {price}
          </div>
        </div>
        <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
        <div className="card-actions justify-end ">
          <Link to={`/details/${_id}`}>
            {" "}
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
