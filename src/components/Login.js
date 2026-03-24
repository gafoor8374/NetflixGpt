import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const isSingUp = () => {
    // setIsSignIn(isSignIn ? false: true);

    setIsSignIn(!isSignIn)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
          alt="bground-image"
        />
      </div>
      <form className="w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sing In" : "Sing Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone Number"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="PassWord"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <button className="bg-red-600 p-4 my-2 rounded-lg w-full">
          {isSignIn ? "Sing In" : "Sing Up"}
        </button>
       <div className="flex mx-2 w-full">
         <input type="checkbox"/>
        <p className="mx-2">Reminder Me</p>
        <div className="mx-6">
          <p className="">Need Help</p>
        </div>
        
       </div>
        <p className="my-4">
          {isSignIn ? "New to Netflix? Please" : "Already User"}
          
          <u className="cursor-pointer mx-2" onClick={isSingUp}>
            {isSignIn ? "Sing Up Now." : "Sing In Now."}
          </u>
        </p>
      </form>
    </div>
  );
}

export default Login;
