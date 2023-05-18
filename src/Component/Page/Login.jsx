import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://t4.ftcdn.net/jpg/01/18/61/65/360_F_118616519_k7bfYYxDnEeem4oIgIGttiCi46xIfIbG.jpg")` }}>
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-10">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-outline btn-secondary mt-5">Login with Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;