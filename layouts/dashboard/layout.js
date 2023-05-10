// layouts/dashboard/layout.js
import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="flex">
                <div className="w-1/5 h-screen sticky top-0">
                    <Sidebar showSidebar={showSidebar} />
                </div>
                <div className="w-full md:w-4/5 flex flex-col h-screen">
                    <Header />
                    <main className="p-4 overflow-y-auto flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
