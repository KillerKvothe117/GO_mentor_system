import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const MenteeLogin = () => {
  return (
    <div className="w-full h-[832px] relative bg-white">
      <Link to="/" className="left-[64px] top-[64px] absolute justify-center items-center gap-2 inline-flex">
        <img className="w-20 h-20" src={Logo} />
        <div>
          <span className="text-red-500 text-[24px] font-bold">My</span>
          <span className="text-black text-[24px] font-semibold"> </span>
          <span className="text-violet-950 text-[24px] font-bold">
            Go-uni Mentor
          </span>
        </div>
      </Link>
      <div className="left-[551px] top-[150px] absolute text-red-500 text-[24px] font-semibold">
        Mentee Sign in
      </div>
      <div className="left-[484px] top-[250px] absolute">
        <form>
          <div className="w-[312px] h-[67.65px] left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
            <label
              htmlFor="email"
              className="text-stone-500 text-[12px] font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-[312px] h-[41.65px] pl-2 bg-white rounded-lg border border-zinc-300"
            />
          </div>
          <div className="w-[312px] h-[200.95px] left-0 top-[91.78px] absolute flex-col justify-start items-center gap-8 inline-flex">
            <div className="flex-col justify-start items-end gap-2 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <label
                  htmlFor="password"
                  className="text-stone-500 text-[12px] font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-[312px] h-[41.65px] pl-2 bg-white rounded-lg border border-zinc-300"
                />
              </div>
              <div className="text-stone-500 text-[10px] font-normal">
                Forgot password?
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[272px] h-[41.30px] relative">
                <div className="w-[272px] h-[41.30px] left-0 top-0 absolute bg-violet-950 rounded-lg" />
                <button className="left-[104px] top-[9px] absolute text-white text-[16px] font-bold tracking-widest cursor-pointer">
                  Sign in
                </button>
              </div>
              <div>
                <span className="text-neutral-700 text-[12px] font-normal">
                  Don’t have an account?
                </span>
                <span className="text-lime-500 text-[12px] font-normal"> </span>
                <Link
                  to="/menteeSignup"
                  className="text-violet-950 text-[16px] font-normal"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenteeLogin;
