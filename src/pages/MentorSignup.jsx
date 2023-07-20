import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const MentorSignup = () => {
  return (
    <div className="w-full h-[832px] relative bg-white">
      <Link
        to="/"
        className="left-[64px] top-[64px] absolute justify-center items-center gap-2 inline-flex"
      >
        <img className="w-20 h-20" src={Logo} />
        <div>
          <span className="text-red-500 text-[24px] font-bold">My</span>
          <span className="text-black text-[24px] font-semibold"> </span>
          <span className="text-violet-950 text-[24px] font-bold">
            Go-uni Mentor
          </span>
        </div>
      </Link>
      <div className="left-[548px] top-[150px] absolute text-red-500 text-[24px] font-semibold">
        Mentor Sign up
      </div>
      <div className="left-[484px] top-[250px] absolute flex-col justify-start items-center gap-16 inline-flex">
        <form>
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <label
                  htmlFor="firstname"
                  className="text-stone-500 text-[12px] font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-[312px] h-[41.65px] pl-2 bg-white rounded-lg border border-zinc-300"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <label
                  htmlFor="lastname"
                  className="text-stone-500 text-[12px] font-semibold"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="w-[312px] h-[41.65px] pl-2 bg-white rounded-lg border border-zinc-300"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <label
                  htmlFor="email"
                  className="text-stone-500 text-[12px] font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-[312px] h-[41.65px] pl-2 bg-white rounded-lg border border-zinc-300"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <label
                  htmlFor="password"
                  className="text-stone-500 text-[12px] font-semibold"
                >
                  Enter a password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-[312px] h-[41.65px] pl-2 bg-white rounded-lg border border-zinc-300"
                />
              </div>
            </div>
            {/* <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="w-2.5 h-2.5 bg-violet-950 rounded-full" />
              <div className="w-2.5 h-2.5 bg-zinc-300 rounded-full" />
              <div className="w-2.5 h-2.5 bg-zinc-300 rounded-full" />
            </div> */}
          </div>
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="w-[272px] h-[41.30px] relative mt-10">
              <div className="w-[272px] h-[41.30px] left-0 top-0 absolute bg-violet-950 rounded-lg" />
              <button className=" text-white text-[16px] font-bold tracking-widest w-[272px] h-[41.30px] left-0 top-0 absolute bg-violet-950 rounded-lg">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MentorSignup;
