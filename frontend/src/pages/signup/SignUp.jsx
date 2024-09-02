import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-7 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-blue-500 ">
          Sanders Web Chat
          <br />
          <span className=" text-gray-300">Sign Up</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="label p-2">
              <span className="text-base label-text text-slate-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-blue-100 "
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

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
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className="">
            <label className="label">
              <span className="text-base label-text text-slate-200">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-blue-100 "
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onChangeCheckBox={handleCheckBox}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm text-slate-300 hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account?
          </Link>
          <div className="flex flex-col items-center">
            <button
              className="btn btn-block btn-sm p-2 mt-1 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
