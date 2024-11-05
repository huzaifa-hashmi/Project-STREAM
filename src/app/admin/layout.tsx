// src/app/admin/layout.tsx
import { redirect } from 'next/navigation';
import AdminNavbar from '../components/AdminNavbar';
import Link from 'next/link';

// This is a placeholder - you'll want to implement real auth
const isAuthenticated = () => {
  return true; // Replace with actual auth check
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check authentication
  if (!isAuthenticated()) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
          <div className="space-y-4">
            <div className="py-2 px-4 rounded hover:bg-gray-800">
              <Link href="/admin/dashboard">Dashboard</Link>
            </div>
            <div className="py-2 px-4 rounded hover:bg-gray-800">
              <Link href="/admin/users">User Management</Link>
            </div>
            <div className="py-2 px-4 rounded hover:bg-gray-800">
              <Link href="/admin/analytics">Traffic Analytics</Link>
            </div>
            <div className="py-2 px-4 rounded hover:bg-gray-800">
              <Link href="/admin/settings">System Settings</Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}