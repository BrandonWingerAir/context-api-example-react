import React, { useState, useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Login() {
    const { setUsername, setShowUsername } = useContext(LoginContext);

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
        </>
    )
}

export default Login;