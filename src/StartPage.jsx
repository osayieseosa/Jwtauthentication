import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="flex-grow w-full font-semibold flex flex-col gap-5 lg:gap-10 py-5 text-center place-content-center">
      <h1 className="font-bold text-xl lg:text-3xl">Get started</h1>
      <div className="flex flex-col gap-2 place-items-center lg:flex-row px-5 lg:place-content-center lg:gap-10">
        <Link
          to="/auth/login"
          className="w-11/12 lg:w-[400px] py-4 rounded-lg text-center bg-primary cursor-pointer hover:bg-blue-700"
        >
          Log in
        </Link>
        <Link
          to="/auth/signup"
          className="w-11/12 lg:w-[400px] py-4 rounded-lg text-center bg-primary cursor-pointer hover:bg-blue-700"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
