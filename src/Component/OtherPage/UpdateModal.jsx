import React from "react";

const UpdateModal = ({ props,handleUpdate }) => {
    const {_id} = props
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-md bold ">
        Update
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle justify-center">
        <div className="modal-box">
          {/* main field */}
          <div className="grid grid-cols-1 gap-5">
          <div className="flex gap-5">
             <label className="label mr-12">
            <span className="label-text ">Price Here</span>
          </label>
            <input
              type="text"
              placeholder="Price here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">available quantity</span>
          </label>
            <input
              type="text"
              placeholder="available quantity"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea className="textarea textarea-warning" placeholder="Detail description"></textarea>
          </div>
    
         
       
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Okey!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
