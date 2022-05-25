import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { LoginContext } from './Contexts/LoginContext';

function App() {
    const [username, setUsername] = useState('');
    const [showUsername, setShowUsername] = useState(false);

    return <div className='App'>
            <LoginContext.Provider value={{ username, setUsername, setShowUsername }}>
                { showUsername ? <Dashboard/> : <Login/> }
            </LoginContext.Provider>
        </div>;
}

export default App;
