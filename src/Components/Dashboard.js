import React, { useContext } from 'react';
import { LoginContext } from '../Contexts/LoginContext';

function Dashboard() {
  const { username } = useContext(LoginContext);

  return (
    <>
        <h1>Dashboard</h1>
        <h2>Username: {username}</h2>
    </>
  )
}

export default Dashboard;