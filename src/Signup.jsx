import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRegister from "./hooks/useRegister";

const Signup = () => {
  const {
    handleChange,
    handleSubmit,
    formData,
    isLoading,
    errMsg,
    successMsg,
  } = useRegister();
  
  const [content, setContent] = useState("");


  useEffect(() => {
    if (errMsg) {

      setContent(
        <div className="bg-red-700 w-full text-center py-3 text-sm font-bold px-5">
          {errMsg}
        </div>
      );
    } else if (successMsg) {
      setContent(
        <div className="bg-green-700 w-full text-center py-3 text-sm font-bold px-5">
          {successMsg}
        </div>
      );
    } else {
      setContent("");
    }
  }, [errMsg, successMsg]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-5 lg:gap-10 py-5">
      <h1 className="text-3xl font-bold">Create your account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-5/6 sm:w-96 gap-3 mt-5"
      >
        {content}
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          value={formData.fullname}
          type="text"
          name="fullname"
          required
          onChange={handleChange}
          placeholder="Full Name eg. John Doe"
          className="px-5 py-3 rounded-sm border-2 border-neutral-500 outline-none text-neutral-700 placeholder:text-neutral-700"
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          value={formData.email}
          type="text"
          name="email"
          required
          onChange={handleChange}
          placeholder="Email"
          className="px-5 py-3 rounded-sm border-2 border-neutral-500 outline-none text-neutral-700 placeholder:text-neutral-700"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
          required
          placeholder="Password"
          className="px-5 py-3 rounded-sm border-2 border-neutral-500 outline-none text-neutral-700 placeholder:text-neutral-700"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-blue-700 py-3 rounded-sm font-semibold mt-5"
        >
          Sign up
        </button>
      </form>
      <p className="text-md">
        Already have an account?{" "}
        <Link className="text-blue-500" to="/auth/login">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
