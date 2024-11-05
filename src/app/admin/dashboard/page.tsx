// src/app/admin/dashboard/page.tsx
export function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <div className="bg-black p-6 rounded-lg text-white">
          <h3 className="text-blue-400 text-xl mb-2">Total Traffic</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-black p-6 rounded-lg text-white">
          <h3 className="text-blue-400 text-xl mb-2">Active Users</h3>
          <p className="text-3xl font-bold">56</p>
        </div>
        <div className="bg-black p-6 rounded-lg text-white">
          <h3 className="text-blue-400 text-xl mb-2">Alerts Today</h3>
          <p className="text-3xl font-bold">23</p>
        </div>
        <div className="bg-black p-6 rounded-lg text-white">
          <h3 className="text-blue-400 text-xl mb-2">System Status</h3>
          <p className="text-3xl font-bold">Active</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl text-blue-400 font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="text-gray-700">No recent activity to display.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { redirect } from 'next/navigation';
export default async function AdminPage() {
  redirect('/admin/dashboard');
}