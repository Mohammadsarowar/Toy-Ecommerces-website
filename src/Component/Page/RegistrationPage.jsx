import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import useTitle from '../OtherPage/useTitle';

const RegistrationPage = () => {
  useTitle('Registration')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
 const {createUser,singInWithGoogle} = useContext(AuthContext)
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, password,photo });
  };
  
  const singInWith = () => {
    singInWithGoogle()
  .then((result) => {
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  
    // ...
  });
  }
  

  return (
    <div className="flex justify-center items-center h-screen mx-10 card-body">
      <form className="w-96 bg-white rounded-lg shadow-xl p-8 ">
        <h2 className="text-2xl font-bold mb-8">Registration</h2>
        <div>
          <label htmlFor="name" className="block font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
          />
        </div>
        <div>
          <label htmlFor="name" className="block font-medium mb-2">
            Photo Url
          </label>
          <input
            type="text"
            id="name"
            name="photo"
            onChange={handlePhoto}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Email
          </label>
          <input
          required
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-2">
          confirm Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <p>Already have an account ? <Link to="/login" className='link link-primary'>LogIn</Link> </p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 mt-6 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
        <button onClick={singInWith} className="btn btn-outline btn-secondary mt-2 w-full">Login with Google</button>
      </form> 
    </div>
  );
};

export default RegistrationPage;
