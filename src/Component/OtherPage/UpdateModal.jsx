import React from "react";

const UpdateModal = ({ props }) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn btn-ghost btn-md bold ">
        Update
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* main field */}
          <div className="grid grid-cols-1 gap-5">
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="flex gap-5">
             <label className="label">
            <span className="label-text">Email</span>
          </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
         
       
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
