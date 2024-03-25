import React, { useState, useEffect } from "react";
import axios from "./api/axios";
import { Link, useParams } from "react-router-dom";

export const VerifyEmailPage = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      setIsLoading(true);
      try {
        console.log(params.id, params.token);
        await axios.get(`verifyEmail/${params.id}/verify/${params.token}`);

        setValidEmail(true);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    verifyEmail();
  }, [params.id, params.token]);
  return (
    <>
      {isLoading ? (
        <div className="flex flex-grow font-bold text-xl items-center justify-center h-screen text-slate-200 gap-2">
          Loading...
          <p className="font-thin">
            Please wait while your request is being validated
          </p>
        </div>
      ) : validEmail ? (
        <div className="flex flex-grow font-bold text-xl text-green-500 items-center justify-center h-screen">
          Email Verified Successfully,&nbsp;
          <span className="text-slate-200 font-thin">Please</span>&nbsp;{" "}
          <Link to="/login" className="text-blue-400 font-thin underline">
            Login
          </Link>
        </div>
      ) : (
        <div className="flex flex-grow font-bold text-xl items-center justify-center h-screen flex-col text-slate-200 gap-2">
          404-Not found
          <p className="font-thin">Please check the link and try again</p>
        </div>
      )}
    </>
  );
};
