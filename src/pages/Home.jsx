import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../index.css"

const Home = () => {
  return (
    <div className="w-full h-[832px] relative background">
      <div className="w-[366px] h-[158.86px] left-[414.14px] top-[100px] absolute">
        <div className="w-[359.14px] h-20 left-[1.86px] top-[78.86px] absolute justify-center items-center gap-[13.14px] inline-flex">
          <img className="w-20 h-20" src={Logo} />
          <div>
            <span className="text-red-500 text-[30px] font-bold">My</span>
            <span className="text-black text-[30px] font-semibold"> </span>
            <span className="text-violet-950 text-[30px] font-bold">
              Go-uni Mentor
            </span>
          </div>
        </div>
        <div className="left-0 top-0 absolute text-red-500 text-[60px] font-semibold">
          Welcome to
        </div>
      </div>
      <div className="left-[318px] top-[379px] absolute justify-start items-start gap-[100px] inline-flex">
        <div className="w-[272px] h-[73px] relative">
          <div className="w-[272px] h-[73px] left-0 top-0 absolute bg-violet-950 rounded-lg" />
          <Link
            to="loginMentor"
            className="w-[173px] h-[22px] left-[49px] top-[25px] absolute text-white text-[20px] font-bold tracking-widest"
          >
            Mentor Sign in
          </Link>
        </div>
        <div className="w-[272px] h-[73px] relative">
          <div className="w-[272px] h-[73px] left-0 top-0 absolute bg-violet-950 rounded-lg" />
          <Link
            to="loginMentee"
            className="w-[181px] h-[23px] left-[46px] top-[25px] absolute text-white text-[20px] font-bold tracking-widest"
          >
            Mentee Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
