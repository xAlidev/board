// pages/dashboard/user/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DashboardLayout from '../../../layouts/dashboard/layout';

function UserProfile() {
    const router = useRouter();
    const { id } = router.query;

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const response = await fetch(`/api/user/${id}`);
                const data = await response.json();
                setUser(data);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <>
            {user ? (
                <div>
                    <h2 className="text-2xl text-white font-semibold mb-4">User Profile</h2>
                    <p>
                        <strong className='text-indigo-500'>ID:</strong> {user.id}
                    </p>
                    <p>
                        <strong className='text-indigo-500'>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong className='text-indigo-500'>Email:</strong> {user.email}
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

const UserProfilePage = () => {
    return (
        <DashboardLayout>
            <UserProfile />
        </DashboardLayout>
    );
};

export default UserProfilePage;
