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
                    <h2 className="text-white text-2xl font-semibold mb-4">User Profile</h2>
                    <p>
                        <strong>ID:</strong> {user.id}
                    </p>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
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
