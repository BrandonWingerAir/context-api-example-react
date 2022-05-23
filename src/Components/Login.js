import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [showUsername, setShowUsername] = useState(false);

    return (
        <>
            <input
                type="text"
                placeholder="Username..."
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />

            <input type="text" placeholder="Password..."/>
            <button
                onClick={() => {
                    setShowUsername(true);
                }}
            >
                LOGIN
            </button>

            {showUsername && <h1>{username}</h1>}
        </>
    )
}

export default Login;