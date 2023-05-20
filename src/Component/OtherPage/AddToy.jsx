import React from "react";

const AddToy = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const picture_url= form.picture_url.value
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;          
        const result = {name,picture_url,seller_name,seller_email,subCategory,price,rating,quantity,description}
        console.log(result);

        fetch("http://localhost:5000/post-toys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
    }
  return (
    <div className=" ">
      <form onSubmit={handleSubmit} className="p-4 mx-auto text-center h-fit w-96 card bg-base-100 shadow-xl">
        <div className="text-center">
          {" "}
          <label htmlFor="picture_url" className="text-lg">
            Picture URL of the toy
          </label>
          <input
           required
            name="picture_url"
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
      

        <label htmlFor="seller_name" className="text-lg mt-4">
          Seller Name
        </label>
        <input
          name="seller_name"
          type="text"
          className="border border-gray-300 px-2 py-1 mt-2 input input-bordered input-secondary w-full max-w-xs"
        />

        <label htmlFor="seller_email" className="text-lg mt-4">
          Seller Email
        </label>
        <input
          required
          name="seller_email"
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
        required
          name="description"
          className="textarea textarea-bordered textarea-sm w-full max-w-xs"
        />
  </div>
        {/* Add submit button or form logic here */}
        <input type="submit" className="btn mt-2"></input>
      </form>
    </div>
  );
};

export default AddToy;
