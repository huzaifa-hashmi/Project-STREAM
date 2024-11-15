// src/app/admin/layout.tsx
import AdminNavbar from '../../components/AdminNavbar';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
          <div className="space-y-4">
            <Link href="/admin/dashboard">
              <div className="py-2 px-4 rounded hover:bg-gray-800">
                Dashboard
              </div>
            </Link>
            <Link href="/admin/users">
              <div className="py-2 px-4 rounded hover:bg-gray-800">
                User Management
              </div>
            </Link>
            <Link href="/admin/analytics">
              <div className="py-2 px-4 rounded hover:bg-gray-800">
                Traffic Analytics
              </div>
            </Link>
            <Link href="/admin/settings">
              <div className="py-2 px-4 rounded hover:bg-gray-800">
                System Settings
              </div>
            </Link>
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