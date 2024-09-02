import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-7 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-blue-500 ">
          Sanders Web Chat
          <br />
          <span className="text-gray-300">Login</span>
        </h1>

        <form onSubmit={handleSubmit}>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-slate-300 hover:underline hover:text-blue-600 m-2 inline-block"
          >
            {"don't"} have an account?
          </Link>
          <div className="flex flex-col items-center">
            <button
              className="btn btn-block btn-sm p-2 mt-2 border border-slate-700"
              disabled={loading}
            >
             {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
