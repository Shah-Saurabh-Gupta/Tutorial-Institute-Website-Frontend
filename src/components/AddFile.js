import React, { useState } from 'react';
import axios from 'axios';

function AddFile() {

    const [fileData, setFileData] = useState();
    const [filename, setFileName] = useState("");
    const [batch, setBatch] = useState("");
    const [fileInfo, setFileInfo] = useState("");
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [files, setFile] = useState("");

    const handleFileChange = ({ target }) => {
        setFileData(target.files[0]);
        setFile(target.value);
        //console.log(target.files[0]);
        //console.log(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("filename", filename);
        formData.append("batch", batch);
        formData.append("fileInfo", fileInfo);
        formData.append("file", fileData);
        console.log(formData);

        await axios.post("http://localhost:5000/files", formData,
            {
                onUploadProgress: ProgressEvent => {
                    setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded * 100) /
                        ProgressEvent.total)))
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            })
            .then((res) => console.log("res", res.data))
            .catch((error) => console.error(error));

        setFileName("");
        setBatch("");
        setFile("");
        setFileInfo("");
        setMessage("File Uploaded");
    };

    return (
        <>
            <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div class="py-8 px-8 rounded-xl">
                    <h1 class="font-medium text-2xl mt-3 text-center">File</h1>
                    {message ? <p>{message}</p> : null}
                    <form onSubmit={handleSubmit} class="mt-6">
                        <div class="my-5 text-sm">
                            <label htmlFor="filename" class="block text-black">Name of File</label>
                            <input type="text" autofocus id="filename" name="filename" value={filename} onChange={(e) => setFileName(e.target.value)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Name of File" />
                        </div>
                        <div class="my-5 text-sm">
                            <label htmlFor="batch" class="block text-black">Batch</label>
                            <select name="batch" value={batch} onChange={e => setBatch(e.target.value)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full">
                                <option value="Free" >Free</option>
                                <option value="Morning" >Morning</option>
                                <option value="Noon" >Noon</option>
                                <option value="Evening" >Evening</option>
                            </select>
                            {/* <input type="text" id="batch" name="batch" value={batch} onChange={(e) => setBatch(e.target.value)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Batch" /> */}                      </div>
                        <div class="my-5 text-sm">
                            <label htmlFor="fileInfo" class="block text-black">Info about File</label>
                            <input type="text" autofocus id="fileInfo" name="fileInfo" value={fileInfo} onChange={(e) => setFileInfo(e.target.value)} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Info of File" />
                        </div>
                        <div class="my-5 text-sm">
                            <label htmlFor="file" class="block text-black">File</label>
                            <input type="file" id="file" name="file" value={files} onChange={handleFileChange} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="File" />
                        </div>

                        <button type="submit" class="block text-center text-white bg-blue-500 p-3 duration-300 rounded-sm hover:bg-blue-600 w-full">Upload</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddFile
