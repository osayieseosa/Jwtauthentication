import { useContext } from "react";
import AppContext from "./context/AppProvider";
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  const { companyName } = useContext(AppContext);

  return (
    <div className="bg-black w-full h-screen text-slate-200 flex flex-col overflow-auto">
      <div className="bg-transparent w-full h-max py-5 pl-10 font-bold text-xl cursor-pointer">
        <Link to="/">{companyName}</Link>
      </div>
      <Outlet />
      <div className="relative bottom-0 w-full p-5 text-sm">
        &copy;{companyName} Inc. All rights reserved
      </div>
    </div>
  );
};

export default Auth;
