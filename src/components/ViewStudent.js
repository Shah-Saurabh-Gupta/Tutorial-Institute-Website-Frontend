import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewStudent = () => {
    const [user, setUser] = useState({
        email: "",
        displayName: "",
        batch: "",
        address: "",
        phone: ""
    });
    useEffect(() => {
        loadUser();
    }, []);
    const { id } = useParams();
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:5000/user/editStudent/${id}`);
        setUser(res.data);
    };

    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Name:{user.displayName}</h1>
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/gallery_4.png" />
                        <div class="text-center lg:w-2/3 w-full">
                            <h4 class="sm:text-2xl text-2xl mb-6 font-small text-gray-900">Email:{user.email}</h4>
                            <h4 class="sm:text-2xl text-2xl mb-6 font-small text-gray-900">Batch:{user.batch}</h4>
                            <h4 class="sm:text-2xl text-2xl mb-6 font-small text-gray-900">Phone Number:{user.phone}</h4>
                            <p class="sm:text-2xl text-2xl mb-6 font-small text-gray-900">Address:{user.address}</p>
                            {/* <div class="flex justify-center">
                                <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                            </div> */}
                        </div>
  </div>
</section>
        </>
    )
}

export default ViewStudent
