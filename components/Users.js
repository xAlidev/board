// components/Users.js
import React from 'react';

const Users = () => {
    return (
        <div className="p-4">
            <h2 className="text-4xl font-semibold mb-4">Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">User 1</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">User 2</h3>
                    <p className="text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Add Friend</button>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">User 3</h3>
                    <p className="text-gray-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <select className="border-gray-300 border-2 rounded-lg py-2 px-4">
                        <option value="">Select Option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">User 4</h3>
                    <p className="text-gray-500">Phasellus mattis, urna at varius porttitor, dolor elit bibendum elit, eu laoreet lorem odio nec tortor.</p>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500">Last Seen: 2 hours ago</p>
                        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Remove</button>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">User 5</h3>
                    <p className="text-gray-500">Pellentesque eget erat enim. Sed blandit, enim vel posuere vulputate, nulla sapien bibendum nisi, non rhoncus ipsum mauris nec sapien.</p>
                    <input type="text" className="border-gray-300 border-2 rounded-lg py-2 px-4" placeholder="Enter Name" />
                </div>
            </div>
        </div>
    );
};

export default Users;
