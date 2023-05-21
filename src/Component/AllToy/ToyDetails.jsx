import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../OtherPage/useTitle";

const ToyDetails = () => {
  useTitle('ToyDetails')
  const data = useLoaderData();
  const {
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={picture_url} className="max-w-md rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{toy_name}</h1>
          <p className="py-6">
            <span className="bold">Details : </span>
            {description}
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head*/}
              <thead>
                <tr>
                  <th></th>
                  <th>Seller-Name</th>
                  <th>Seller-Email</th>
                  <th>Quantity</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{seller_name}</td>
                  <td>{seller_email}</td>
                  <td>{quantity}</td>
                  <td>
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
                  </td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
