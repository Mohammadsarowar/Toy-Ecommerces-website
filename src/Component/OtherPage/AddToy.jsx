import React from "react";

const AddToy = () => {
  return (
    <div className=" ">
      <div className="p-4 mx-auto text-center h-fit w-96 card bg-base-100 shadow-xl">
        <div className="text-center">
          {" "}
          <label htmlFor="pictureUrl" className="text-lg">
            Picture URL of the toy
          </label>
          <input
            name="pictureUrl"
            type="text"
            className="border m-2 border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
          />
          <label htmlFor="name" className="text-lg mt-4">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
          />
      

        <label htmlFor="sellerName" className="text-lg mt-4">
          Seller Name
        </label>
        <input
          name="sellerName"
          type="text"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />

        <label htmlFor="sellerEmail" className="text-lg mt-4">
          Seller Email
        </label>
        <input
          name="sellerEmail"
          type="email"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />
      
        <label htmlFor="subCategory" className="text-lg mt-4">
          Sub-category
        </label>
        <input
          name="subCategory"
          type="text"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />

        <label htmlFor="price" className="text-lg mt-4">
          Price
        </label>
        <input
          name="price"
          type="number"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />
  
        <label htmlFor="rating" className="text-lg mt-4">
          Rating
        </label>
        <input
          name="rating"
          type="number"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />

        <label htmlFor="quantity" className="text-lg mt-4">
          Available Quantity
        </label>
        <input
          name="quantity"
          type="number"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />
      
        <label htmlFor="description" className="text-lg mt-4">
          Detail Description
        </label>
        <textarea
          name="description"
          className="textarea textarea-bordered textarea-sm w-full max-w-xs"
        />
  </div>
        {/* Add submit button or form logic here */}
        <input type="submit" className="btn mt-2"></input>
      </div>
    </div>
  );
};

export default AddToy;
