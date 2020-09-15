import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const friendDetailStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div style={friendDetailStyle}>
            <h2>Friend Id: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;