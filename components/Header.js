// components/Header.js

import React, { useState } from 'react';
import Link from 'next/link';
import Avatar from './Avatar';


const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="bg-gray-700 bg-opacity-60 text-white h-16 flex items-center justify-end px-4">
            <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center space-x-2">
                    <Avatar src="/images/cool-boy.jpg" alt="User" size={2} />
                    <i className={`fas fa-chevron-down ${dropdownOpen ? 'transform rotate-180' : ''}`}></i>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-600 rounded shadow-md">
                        <Link href="/account" className="block rounded px-4 py-2 hover:bg-neutral-100">
                            Account
                        </Link>
                        <Link href="/signup" className="block rounded px-4 py-2 hover:bg-neutral-100">
                            Sign Up
                        </Link>
                        <Link href="/logout" className="block rounded px-4 py-2 hover:bg-neutral-100">
                            Log Out 
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
