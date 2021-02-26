import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/userContext";

function AuthOptions() {

    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const admin = () => history.push("/admin");
    const student = () => history.push("/student");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            role: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
        localStorage.setItem("role", "");
        history.push("/");
    };

    return (
        <>
            {userData.user ? (
                <>
                    {(userData.role === 'admin') ?
                        (<>
                            <div onClick={admin}><button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Admin
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button></div>
                            <div onClick={logout}><button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button></div>
                        </>) :
                        (<>
                            <div onClick={student}><button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Student
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button></div>
                            <div onClick={logout}><button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button></div>
                        </>)}
                </>
            ) : (
                    <>
                        <div onClick={login}><button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button></div>
                    </>
                )}
        </>
    )
}

export default AuthOptions
