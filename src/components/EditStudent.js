import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const EditStudent = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        email: "",
        password: "",
        displayName: "",
        batch: "",
        address: "",
        phone: ""
    });

    const { email, password, displayName, batch, address, phone } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const loadUser = async () => {
            const result = await axios.get(`https://tutorial-website-backend.herokuapp.com/user/editStudent/${id}`);
            setUser(result.data);
        };

        loadUser();
    }, [id]);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://tutorial-website-backend.herokuapp.com/user/${id}`, user);
        history.push("/admin");
    };

    return (
        <>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Edit Student Form</h1>
                    <form onSubmit={e => onSubmit(e)} className="mt-6">
                        <div className="my-5 text-sm">
                            {/* <label htmlFor="email" className="block text-black">Email</label> */}
                            <input type="email" autoFocus id="email" name="email" value={email} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
                        </div>

                         <div className="my-5 text-sm">
                            {/* <label htmlFor="password" className="block text-black">Password</label> */}
                            <input type="password" autoFocus id="password" name="password" value={password} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        </div> 
                         

                        <div className="my-5 text-sm">
                            {/* <label htmlFor="displayName" className="block text-black">Display Name</label> */}
                            <input type="text" autoFocus id="displayName" name="displayName" value={displayName} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Name" />
                        </div>
                        <div className="my-5 text-sm">
                            {/* <label htmlFor="batch" className="block text-black">Batch</label> */}
                            <input type="text" id="batch" name="batch" value={batch} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Batch" />
                        </div>
                        <div className="my-5 text-sm">
                            {/* <label for="address" className="leading-7 text-sm text-gray-600">Address</label> */}
                            <textarea id="address" name="address" value={address} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full h-32" placeholder="Address"></textarea>
                        </div>
                        <div className="my-5 text-sm">
                            {/* <label htmlFor="phone" className="block text-black">Phone</label> */}
                            <input type="text" id="phone" name="phone" value={phone} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Phone Number" />
                        </div>
                        <button type="submit" className="block text-center text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-600 w-full">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditStudent
