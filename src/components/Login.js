import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValidateFormData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null); // set the reference value email
  const password = useRef(null); // set the reference value password

  const handleToSingIn = () => {
    //validate data by using useRef()
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = isSignIn
      ? isValidateFormData(email.current.value, password.current.value)
      : isValidateFormData(
          email.current.value,
          password.current.value,
          fullName.current.value,
        ); // retrun the value here
    // console.log(message);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/97434962?v=4&size=64",
          })
            .then(() => {
              const {uid ,email, displayName, photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
            navigate('/browse');
            })
            .catch((error) => {
              setErrorMessage(message);
            });
          
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(message);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(auth, email.current.value.trim(), password.current.value.trim())
      
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          )
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const isSignUp = () => {
    // setIsSignIn(isSignIn ? false: true);

    setIsSignIn(!isSignIn);
    setErrorMessage(null);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800"
          />
        )}
        <input
          ref={email} // set the reference value email
          type="text"
          placeholder="Email or phone Number"
          className="p-2 my-2 w-full bg-gray-800"
        />
        <input
          ref={password} // set the reference value pass
          type="password"
          placeholder="PassWord"
          className="p-2 my-2 w-full bg-gray-800"
        />
       
        <p className="text-red-500 font-bold py-4">{errorMessage  /* show the error message is valid or not */}   </p> 
        <button
          className="bg-red-600 p-4 my-2 rounded-lg w-full"
          onClick={handleToSingIn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex mx-2 w-full">
          <input type="checkbox" />
          <p className="mx-2">Remember Me</p>
          <div className="mx-6">
            <p className="">Need Help</p>
          </div>
        </div>
        <p className="my-4">
          {isSignIn ? "New to Netflix? Please" : "Already User"}

          <u className="cursor-pointer mx-2" onClick={isSignUp}>
            {isSignIn ? "Sign Up Now." : "Sign In Now."}
          </u>
        </p>
      </form>
    </div>
  );
}

export default Login;
