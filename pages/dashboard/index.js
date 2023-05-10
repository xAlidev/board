// pages/dashboard/index.js
import DashboardLayout from '../../layouts/dashboard/layout';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="p-4 text-white">
            <h1 className="text-4xl font-semibold mb-4">Dashboard</h1>
            <p className="text-gray-500">Welcome back!</p>
            </div>
        </DashboardLayout>
    );
}
