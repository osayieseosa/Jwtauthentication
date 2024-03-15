import React, { useState } from "react";
import { Link } from "react-router-dom";

//Usasmmzillow

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-5 lg:gap-10 py-5">
      <h1 className="text-4xl font-bold">Welcome Back!</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-5/6 sm:w-96 gap-3 mt-5"
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-5 py-3 rounded-sm border-2 border-neutral-500 outline-none"
        />
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-5 py-3 rounded-sm border-2 border-neutral-500 outline-none"
        />
        <div className="flex gap-3">
          <input type="checkbox" htmlFor="stayLoggedIn" />
          <label htmlFor="stayLoggedIn" className="text-sm font-bold">
            Keep me logged in
          </label>
        </div>

        <input
          className="bg-primary hover:bg-blue-700 py-3 rounded-sm font-semibold mt-5"
          type="submit"
          value="Sign in"
        />
      </form>
      <div className="text-center flex flex-col gap-2">
        <p className="text-md border-b-2 border-dashed border-slate-300 pb-2">
          Dont have an account?{" "}
          <Link className="text-blue-500" to="/auth/signup">
            Sign up
          </Link>
        </p>
        <Link>Forgot password</Link>
      </div>
    </div>
  );
};

export default Login;
