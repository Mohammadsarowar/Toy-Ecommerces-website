import React from 'react';

const ReviewPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-bold mb-4">Product Reviews</h1>
      <div className="max-w-md bg-white rounded-lg shadow-md px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="user-avatar.jpg"
              alt="User Avatar"
            />
            <div>
              <p className="text-gray-800 font-bold">John Doe</p>
              <p className="text-gray-600">May 15, 2023</p>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-500 fill-current mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.31L22 9.39l-5 4.86L18.18 22 12 18.75 5.82 22l1.09-7.75-5-4.86L8.91 8.31 12 2zm0 8l-3.09 6.31-6.8.99 4.92 4.79-1.19 7.76L12 18.75l6.27 3.92-1.19-7.76 4.92-4.79-6.8-.99L12 10z" />
            </svg>
            <p className="text-gray-600">4.5</p>
          </div>
        </div>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          risus eget urna blandit iaculis. Aliquam ut placerat odio.
        </p>
        <hr className="my-4" />
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Reply
          </button>
        </div>
      </div>
      {/* Additional review cards can be added here */}
    </div>
  );
};

export default ReviewPage;
