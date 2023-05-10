// components/Settings.js
import React from 'react';

const Settings = () => {
    return (
        <div className="p-4">
            <h2 className="text-4xl text-white font-semibold mb-8">Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded p-6">
                <div className="flex items-center mb-4">
                    <i className="fas fa-cogs text-indigo-500 text-3xl mr-4"></i>
                    <h3 className="text-lg text-white font-semibold mb-2">Setting 1</h3>
                </div>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-gray-800 rounded p-6">
                <div className="flex items-center mb-4">
                    <i className="fas fa-cogs text-indigo-500 text-3xl mr-4"></i>
                    <h3 className="text-lg text-white font-semibold mb-2">Setting 2</h3>
                </div>
                    <p className="text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="bg-gray-800 rounded p-6">
                <div className="flex items-center mb-4">
                    <i className="fas fa-cogs text-indigo-500 text-3xl mr-4"></i>
                    <h3 className="text-lg text-white font-semibold mb-2">Setting 3</h3>
                    </div>
                    <p className="text-gray-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
