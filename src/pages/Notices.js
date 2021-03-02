import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleNotice from '../components/SingleNotice';

function Notices() {
 
    //const BASE_URL = process.env.REACT_BASE_URL;
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        (async () => {
            await axios.get("https://tutorial-website-backend.herokuapp.com/notice/").then((res) => {
                setRooms(res.data.reverse());
                // console.log(res.data);
            });
        })();
    }, []);

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {rooms && rooms.map((room) => (
                            <SingleNotice
                                key={room._id}
                                title={room.title}
                                content={room.content}
                                author={room.author}
                                createdAt={room.createdAt}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Notices
