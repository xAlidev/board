// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = ({ showSidebar }) => {
    return (
        <aside
            className={`${showSidebar ? 'block' : 'hidden'
                } bg-neutral-900 text-white w-full md:w-64 p-4 h-full md:block fixed md:static`}
        >
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