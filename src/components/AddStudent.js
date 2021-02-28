import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddStudent = () => {
  let history = useHistory();
  
  const [user, setUser] = useState({
    email: "",
    password: "",
    displayName: "",  
    batch: "",
    address:"",
    phone:""
  });
   
  const { email, password, displayName, batch, address, phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    //console.log(user);
    await axios.post("http://localhost:5000/user/registerStudent", user);
    history.push("/admin");
  };

    return (
        <>
              <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div class="py-8 px-8 rounded-xl">
                    <h1 class="font-medium text-2xl mt-3 text-center">Add Student Form</h1>
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
                            <select name="batch" value= {batch} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full">
                                <option value="Morning" >Morning</option>
                                <option value="Noon" >Noon</option>
                                <option value="Evening" >Evening</option>
                            </select>
                            {/* <input type="text" id="batch" name="batch" value={batch} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Batch" /> */}
                        </div>
                        <div class="my-5 text-sm">
                            {/* <label for="address" className="leading-7 text-sm text-gray-600">Address</label> */}
                            <textarea id="address" name="address" value={address} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full h-32" placeholder="Address"></textarea>
                        </div>
                        <div class="my-5 text-sm">
                            {/* <label htmlFor="phone" class="block text-black">Phone</label> */}
                            <input type="text" id="phone" name="phone" value={phone} onChange={e => onInputChange(e)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Phone Number" />
                        </div>
                        <button type = "submit" class="block text-center text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-600 w-full">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddStudent
