// components/Sidebar.js
import React from 'react';
import Link from 'next/link';

const Sidebar = ({ showSidebar }) => {
    return (
        <aside
            className={`${showSidebar ? 'block' : 'hidden'
                } bg-gray-800 text-white w-full md:w-64 p-4 h-full md:block fixed md:static`}
        >
            <h2 className="text-lg font-semibold mb-4">Dashboard Menu</h2>
            <nav>
                <ul>
                    <li className="mb-2">
                        <Link href="/dashboard" className='flex items-center rounded hover:bg-gray-700 mb-2 p-3'>
                            <i class="fas fa-th-large"></i>
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                    <Link href="/dashboard/stats" className='flex items-center rounded hover:bg-gray-700 mb-2 p-3'>
                            <i class="fas fa-user-alt"></i>
                            <span className="ml-3">Stats</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                    <Link href="/dashboard/users" className='flex items-center rounded hover:bg-gray-700 mb-2 p-3'>
                            <i class="fas fa-th-large"></i>
                            <span className="ml-3">Users</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/dashboard/settings">
                            <span className="block p-3 rounded hover:bg-gray-700">Settings</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;