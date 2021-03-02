import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddNotice = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    content: "",
    author:""
  });

  const { title, content, author } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://tutorial-website-backend.herokuapp.com/notice/", user);
    history.push("/admin");
  };
    return (
        <>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Notice</h1>
                    <form onSubmit={e => onSubmit(e)} className="mt-6">
                        <div className="my-5 text-sm">
                            <label htmlFor="title" className="block text-black">Title</label>
                            <input type="text" autoFocus id="title" name="title" value={title} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Title" />
                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="author" className="block text-black">Author</label>
                            <input type="text" id="author" name="author" value={author} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Author name" />
                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="content" value={content} onChange={e => onInputChange(e)} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full h-32" placeholder="Add text"></textarea>
                        </div>

                        <button type = "submit" className="block text-center text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-600 w-full">Add</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddNotice
