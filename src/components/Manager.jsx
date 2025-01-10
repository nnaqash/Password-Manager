import React from "react";

const Manager = () => {
  return (
    <>
      <div className="mx-auto bg-customBlue max-w-4xl my-5 p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-100">
          Welcome to Your Vault
        </h1>
        <p className="text-lg text-gray-200 mb-4 text-center w-full ">
          Securely store and manage your passwords with ease.
        </p>
        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border border-blue-900 text-black px-3 py-1 w-full"
            placeholder="Enter the URL of your website"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              className="rounded-full border border-blue-900 text-black px-3 py-1 w-full"
              placeholder="Enter your Username"
              type="text"
              name=""
              id=""
            />
            <div className="relative w-full">
            <input
              className="rounded-full border border-blue-900 text-black px-3 py-1 w-full"
              placeholder=" Enter your Password"
              type="text"
              name=""
              id=""
            />
            <span className="absolute right-0 text-black">show</span>
            </div>
            
          </div>
          <button className="flex justify-center items-center bg-amber-400 rounded-full font-semibold w-fit p-3 hover:bg-yellow-500 border-2 border-amber-500 gap-1 ">
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#306bac,secondary:#104891"              
            ></lord-icon>
            Save Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
