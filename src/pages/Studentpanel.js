import React, { useContext } from 'react';
import StudentResources from '../components/StudentResources';
import UserContext from "../context/userContext";


function Studentpanel() {
    const { userData } = useContext(UserContext);
    return (
        <>
            <div>
                <div className="flex flex-wrap mt-3 container mx-auto">
                    {userData.user.user ? (
                        <>
                            <div className="ml-4 align-right mr-4"><h3><b>Welcome</b> {userData.user.user.displayName}</h3></div>
                            <div className="align-left"><h3><b>Batch:</b> {userData.user.user.batch}</h3></div>
                        </>
                    ) : (
                            <>
                                <div className="ml-4 align-right mr-4"><h3><b>Welcome</b> {userData.user.displayName}</h3></div>
                                <div className="align-left"> <h3><b>Batch:</b>{userData.user.batch}</h3></div>
                            </>
                        )}
                </div>
                <div>
                    <StudentResources />
                </div>
            </div>
        </>
    )
}

export default Studentpanel
