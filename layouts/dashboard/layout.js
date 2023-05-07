// layouts/dashboard/layout.js
import React from 'react';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
    return (
        <div className="flex flex-row" style={{ height: '100vh' }}>
            <div className="w-1/5 bg-gray-800 h-full hidden md:block">
                <Sidebar />
            </div>
            <main className="w-full md:w-4/5 p-4">
                {children}
            </main>
        </div>
    );
}
