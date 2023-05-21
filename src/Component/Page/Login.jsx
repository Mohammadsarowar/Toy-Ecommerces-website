import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { singIn, singInWithGoogle } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
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
  };
  singInWithGoogle()
    .then((result) => {
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // ...
    });
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/01/18/61/65/360_F_118616519_k7bfYYxDnEeem4oIgIGttiCi46xIfIbG.jpg")`,
      }}
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-10 card-body">
          <form onSubmit={handleSubmit} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button
            onClick={singInWithGoogle}
            className="btn btn-outline btn-secondary mt-5"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
