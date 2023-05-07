// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-full md:w-64 p-4 h-full hidden-mobile">
            <h2 className="text-lg font-semibold mb-4">Dashboard Menu</h2>
            <nav>
                <ul>
                    <li className="mb-2">
                        <Link href="/dashboard/stats">
                            <span className="block p-2 rounded hover:bg-gray-700">Stats</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/dashboard/users">
                            <span className="block p-2 rounded hover:bg-gray-700">Users</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/dashboard/settings">
                            <span className="block p-2 rounded hover:bg-gray-700">Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
