import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO_URL, PROFILE_URL} from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth,(user) => {
                if (user) {
                    const { uid, email, displayName, photoURL } = auth.currentUser;
                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: PROFILE_URL,
                        }),
                    );
                    navigate("/browse");
                } else {
                    dispatch(removeUser());
                    navigate("/");
                }
            },
        );
        return () => unsubscribe();
    },[]);
    const handleSignedOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                <Error />;
            });
    };
    return (
        <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src={LOGO_URL}
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
};

export default Header;
