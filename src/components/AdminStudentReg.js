import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


function AdminStudentReg() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/user/");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:5000/user/${id}`);
        loadUsers();
    };
    console.log(users);

    return (
        <>
            {/* component */}
            <div>
                <div class="flex flex-col max-w-full shadow-md m-6">
                    {/*  Header */}
                    <div class="flex justify-between items-center bg-blue-500 border-b px-6 py-4">
                        <p class="text-xl text-white font-semibold">Students List</p>

                        <Link to={`/admin/addStudent`} class="bg-blue-600 hover:bg-blue-700 text-white text-xs px-6 py-2 rounded-lg border-0">Add New</Link>
                    </div>
                    {/*  End Header  */}

                    {/* Table */}
                    <table class="overflow-y-scroll w-full bg-white divide-y divide-gray-200">
                        <thead class="bg-gray-50 text-gray-500 text-sm">
                            <tr class="divide-x divide-gray-300">

                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Batch</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Created on</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Due on</th>
                                <th class="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-500 text-xs divide-y divide-gray-200">
                            {users.map((user, index) => (
                                <tr key={user._id} class="text-center">

                                    <td class="py-3">{index + 1}</td>
                                    <td class="py-3">{user.displayName}</td>
                                    <td class="py-3">
                                        <span class="bg-green-200 text-green-500 text-xs font-semibold rounded-md py-1 px-2">Assigned</span>
                                    </td>
                                    <td class="py-3">{user.email}</td>
                                    <td class="py-3">{user.batch}</td>
                                    <td class="py-3">10/01/2021</td>
                                    <td class="py-3">10/03/2020</td>
                                    <td class="py-3">
                                        <div class="flex justify-center space-x-1">
                                            <Link to={`/admin/viewStudent/${user._id}`} class="border-2 border-green-200 rounded-md p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-green-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </Link>
                                            <Link to={`/admin/editStudent/${user._id}`} class="border-2 border-indigo-200 rounded-md p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-indigo-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </Link>
                                            <Link to="" onClick={() => deleteUser(user._id)} class="border-2 border-red-200 rounded-md p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-red-500">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <!-- End Table --> */}
                </div>

            </div>
        </>
    )
}

export default AdminStudentReg