import React, { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {};

  return (
    <div className="h-full w-full font-semibold flex flex-col gap-5 lg:gap-10 py-5 text-center place-content-center">
      <form onSubmit={registerUser}>
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          id="name"
          value={fullName}
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Signup;
