import React from 'react'
import { Outlet } from 'react-router';

const Dashboard = () => {
    return <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Here you can manage your notes, view your profile, and access other features of the Note App.</p>
        <Outlet />
    </div>
}

export default Dashboard