import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, storage, db } from "../firebase";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

const MenteeSignup = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setIsUploaded(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const file = e.target[4].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${firstName} ${lastName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              firstName,
              lastName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "students", res.user.uid), {
              uid: res.user.uid,
              firstName,
              lastName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "studentChats", res.user.uid), {});
            


          } catch (error) {
            console.log(error);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[722px] relative bg-white">
      <Link
        to="/"
        className="left-[64px] top-[64px] absolute justify-center items-center gap-2 inline-flex"
      >
        <img className="w-20 h-20" src={Logo} alt="Logo" />
        <div>
          <span className="text-red-500 text-[24px] font-bold">My</span>
          <span className="text-black text-[24px] font-semibold"> </span>
          <span className="text-violet-950 text-[24px] font-bold">
            Go-uni Mentor
          </span>
        </div>
      </Link>
      <div className="left-[551px] top-[150px] absolute text-red-500 text-[24px] font-semibold">
        Mentee Sign up
      </div>

      <form
        onSubmit={handleSubmit}
        className="left-[484px] top-[250px] absolute flex-col justify-start items-center gap-16 inline-flex"
      >
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
                htmlFor="password"
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

            {/* Profile Picture Upload */}
            <div className="w-[312px] h-[67.19px] flex-col justify-start items-start gap-1 inline-flex">
              <label
                htmlFor="profile-picture-input"
                className="w-[312px] h-[66.19px] relative cursor-pointer"
              >
                <div className="left-0 top-0 absolute text-stone-500 text-xs font-semibold">
                  Upload photo
                </div>
                <div className="w-[312px] h-[41.65px] left-0 top-[24.53px] absolute bg-white rounded-lg border border-zinc-300" />
                <div className="w-[98px] h-[41.65px] left-[-0px] top-[24.53px] absolute">
                  <div
                    className={`w-[98px] h-[41.65px] left-0 top-0 absolute bg-stone-300 rounded-lg border ${
                      isUploaded ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300 ease-in-out`}
                  ></div>
                  <div className="left-[16px] top-[11.90px] absolute text-stone-500 text-xs font-normal">
                    {isUploaded ? "Uploaded" : "Choose file"}
                  </div>
                </div>
              </label>
              <input
                type="file"
                id="profile-picture-input"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
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
          <div className="w-[272px] h-[61.30px] relative">
            <button
              type="submit"
              className="text-white text-[16px] font-bold tracking-widest w-[272px] h-[41.30px] left-0 top-0 absolute bg-violet-950 rounded-lg"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MenteeSignup;
