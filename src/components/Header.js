import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, PROFILE_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const popupRef = useRef();

  // 🔐 Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL: PROFILE_URL,
          })
        );

        // ✅ Prevent redirect overriding navigation
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [location.pathname]);

  // 🔴 Logout
  const handleSignedOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  // 👆 Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black z-20 flex items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="flex items-center space-x-8">
        
        {/* Logo */}
        <img className="w-44" src={LOGO_URL} alt="logo" />

        {/* Navigation */}
        {user && (
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/browse" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shows" className="hover:text-gray-300">
                Shows
              </Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-gray-300">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/games" className="hover:text-gray-300">
                Games
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* RIGHT SIDE */}
      {user && (
        <div
          className="flex items-center space-x-4 relative"
          ref={popupRef}
        >
          
          {/* Profile Image */}
          <img
            className="w-10 h-10 rounded-full cursor-pointer"
            src={user?.photoURL}
            alt="profile"
            onClick={() => setOpen(!open)}
          />

          {/* Popup Dropdown */}
          {open && (
            <div className="absolute right-0 top-12 bg-black text-white p-4 rounded shadow-lg w-48 border border-gray-700">
              
              <p className="p-2 hover:bg-gray-800 cursor-pointer">
                Profile
              </p>

              <p className="p-2 hover:bg-gray-800 cursor-pointer">
                Settings
              </p>

              <p
                className="p-2 hover:bg-gray-800 cursor-pointer"
                onClick={handleSignedOut}
              >
                Logout
              </p>

            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default Header;