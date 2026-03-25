import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const Header = ()=>{
    const user = useSelector((store)=>store.user);
    const navigate = useNavigate();

    const handleSignedOut = () => {
      signOut(auth)
        .then(() => {
          navigate("/")
        })
        .catch((error) => {
         <Error />
        });
    };
    return (
      <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        {user && (
          <div className="flex">
            <img className="w-10 h-10" src={user?.photoURL} alt="profilelogo" />
            <button
              className="font-bold text-white rounded-lg"
              onClick={handleSignedOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
}

export default Header;