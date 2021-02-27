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
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/user/${id}`, user);
        history.push("/admin");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/user/editStudent/${id}`);
        setUser(result.data);
    };
    return (
        <>
            <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div class="py-8 px-8 rounded-xl">
                    <h1 class="font-medium text-2xl mt-3 text-center">Edit Student Form</h1>
                    <form onSubmit={e => onSubmit(e)} class="mt-6">
                        <div class="my-5 text-sm">
                            {/* <label htmlFor="email" class="block text-black">Email</label> */}
                            <input type="email" autofocus id="email" name="email" value={email} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
                        </div>

                         <div class="my-5 text-sm">
                            {/* <label htmlFor="password" class="block text-black">Password</label> */}
                            <input type="password" autofocus id="password" name="password" value={password} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        </div> 
                         

                        <div class="my-5 text-sm">
                            {/* <label htmlFor="displayName" class="block text-black">Display Name</label> */}
                            <input type="text" autofocus id="displayName" name="displayName" value={displayName} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Name" />
                        </div>
                        <div class="my-5 text-sm">
                            {/* <label htmlFor="batch" class="block text-black">Batch</label> */}
                            <input type="text" id="batch" name="batch" value={batch} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Batch" />
                        </div>
                        <div class="my-5 text-sm">
                            {/* <label for="address" className="leading-7 text-sm text-gray-600">Address</label> */}
                            <textarea id="address" name="address" value={address} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full h-32" placeholder="Address"></textarea>
                        </div>
                        <div class="my-5 text-sm">
                            {/* <label htmlFor="phone" class="block text-black">Phone</label> */}
                            <input type="text" id="phone" name="phone" value={phone} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Phone Number" />
                        </div>
                        <button type="submit" class="block text-center text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-600 w-full">Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditStudent
