// components/Settings.js
import React from 'react';

const Settings = () => {
    return (
        <div className="p-4">
            <h2 className="text-4xl font-semibold mb-4">Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Setting 1</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Setting 2</h3>
                    <p className="text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Setting 3</h3>
                    <p className="text-gray-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
