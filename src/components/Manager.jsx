import { useRef, useState, useEffect } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "icons/eyecross.png";
    }
  };
  const savePassword = () => {
    if(form.site.length>5 && form.username.length>5 && form.password.length>5){
      setpasswordArray([...passwordArray, {...form, id:uuidv4()}]);
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4()}]));
      console.log(passwordArray, form);
      setform({ site: "", username: "", password: "" })
      toast("password saved successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      alert("enter valid data")
    }
    
  };

  const deleteData = (id) => {
    console.log("delet with " , id)
    let con = confirm("are you sure you want to delete?")
    if(con){
      setpasswordArray(passwordArray.filter(item=>item.id!==id))
      localStorage.setItem("password", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
      toast("Your data has been deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }    
  };

  const editData = (id) => {
    console.log("editin with " , id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id));
   };


  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className=" mx-auto bg-customBlue max-w-4xl my-5 p-6 rounded-lg ">
        <h1 className="text-2xl font-bold text-center text-gray-100">
          Welcome to Your Vault
        </h1>
        <p className="text-lg text-gray-200 mb-4 text-center w-full ">
          Securely store and manage your passwords with ease.
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center ">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-blue-900 text-black px-3 py-1 w-full "
            placeholder="Enter the URL of your website"
            type="text"
            name="site"
            id=""
          />
          <div className="flex md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-blue-900 text-black px-3 py-1 w-full"
              placeholder="Enter your Username"
              type="text"
              name="username"
              id=""
            />
            <div className="relative w-full flex">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-blue-900 text-black px-3 py-1 w-full"
                placeholder=" Enter your Password"
                type="password"
                name="password"
                id=""
              />
              <span
                className="absolute right-[5px] top-[3px] text-black cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={29}
                  src="icons/eye.png"
                  alt="eyeicon"
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-amber-400 rounded-full font-semibold w-fit py-2 px-5 hover:bg-yellow-500 border-2 border-amber-500 gap-1 hover:text-customBlue"
          >
            <lord-icon
              src="https://cdn.lordicon.com/tsrgicte.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#306bac,secondary:#104891"
            ></lord-icon>
            Save
          </button>
        </div>

        <div className="passwords text-customBlue">
          <h2 className="font-bold text-2xl text-gray-100 pb-4">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-xl overflow-hidden mb-10">
              <thead className="bg-amber-400">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-yellow-300">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border border-customBlue text-center py-1">
                        <div
                          className="cursor-pointer flex justify-evenly"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <img
                            src="/icons/clipboard.png"
                            alt="copy icon"
                            className="h-6 w-6 cursor-pointer "
                          />
                        </div>
                      </td>
                      <td className="border border-customBlue text-center py-1">
                        <div
                          className="cursor-pointer flex justify-evenly"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          {item.username}
                          <img
                            src="/icons/clipboard.png"
                            alt="copy icon"
                            className="h-6 w-6 flex justify-center cursor-pointer "
                          />
                        </div>
                      </td>
                      <td className="border border-customBlue text-center py-1">
                        <div className="cursor-pointer flex justify-evenly"onClick={() => {copyText(item.password);}}>                          
                          {item.password}
                          <img
                            src="/icons/clipboard.png"
                            alt="copy icon"
                            className="h-6 w-6 flex justify-center cursor-pointer "
                          />
                        </div>
                      </td>
                      <td className="border border-customBlue text-center py-1">
                        <span className="flex justify-evenly">
                        <img
                            src="/icons/edit.png"
                            alt="copy icon"
                            className="h-6 w-6 flex justify-center cursor-pointer " 
                            onClick={()=>{editData(item.id)}}
                          />
                        <img
                            src="/icons/delete.png"
                            alt="copy icon"
                            className="h-6 w-6 flex justify-center cursor-pointer "
                            onClick={()=>{deleteData(item.id)}}
                          />                          
                        </span>                        
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
