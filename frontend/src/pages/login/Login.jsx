import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className='w-full p-7 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center text-blue-500 ">
          Sanders Web Chat
          <br />
          <span className="text-gray-300">Login</span>
        </h1>
        
        <form>
          <div className="">
            <label className="label p-2">
              <span className="text-base label-text text-slate-200">
                Username
              </span>
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-blue-100 "
            />
          </div>

          <div className="">
            <label className="label">
              <span className="text-base label-text text-slate-200">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-blue-100 "
            />
          </div>
          <a
            href="#"
            className="text-sm text-slate-300 hover:underline hover:text-blue-600 m-2 inline-block"
          >
            {"don't"} have an account?
          </a>
          <div className="flex flex-col items-center">
            <button className="btn btn-block btn-sm p-2 mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
