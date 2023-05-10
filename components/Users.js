// components/Users.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from './Card';


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            console.log('Fetching users...'); // Added console.log
            const response = await fetch('/api/users');
            const data = await response.json();
            console.log('Fetched users:', data); // Added console.log
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div className="p-4 text-white">
            <h2 className="text-4xl font-semibold mb-8">Users</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.map((user) => (
                    <Card
                        key={user.id}
                        icon="fas fa-user"
                        title={user.name}
                        description={user.email}
                        button={
                            <Link href={`/dashboard/user/${user.id}`} passHref>
                                <button className="text-indigo-500 hover:underline">View Profile</button>
                            </Link>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
