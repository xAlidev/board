// layouts/dashboard/layout.js
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-indigo-500 text-white p-4 md:hidden flex justify-between items-center">
                <h2 className="text-lg font-semibold">Dashboard</h2>
                <button onClick={() => setShowSidebar(!showSidebar)}>
                    <i className="fas fa-bars"></i>
                </button>
            </header>
            <div className="flex flex-row flex-grow">
                <div className="w-1/5 h-screen md:h-auto">
                    <Sidebar showSidebar={showSidebar} />
                </div>
                <main className="w-full md:w-4/5 p-4 flex-grow md:flex-grow-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
