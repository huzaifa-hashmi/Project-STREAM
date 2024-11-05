// src/components/AdminNavbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function AdminNavbar() {
  return (
    <div className="flex justify-evenly bg-black align-middle">
      <div className="sticky mt-2 top-0 col-span-2">
        <Image src={"/images/logo.webp"} alt="LOGO" width={75} height={75} />
      </div>

      <div className="text-3xl text-blue-400 font-semibold col-span-10 py-6">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="flex text-xl text-white justify-around gap-4 py-7">
        <Link href={'/admin/dashboard'}>Dashboard</Link>
        <Link href={'/admin/users'}>Users</Link>
        <Link href={'/admin/analytics'}>Analytics</Link>
        <Link href={'/admin/settings'}>Settings</Link>
        <Link href={'/'}>Exit Admin</Link>
      </div>
    </div>
  );
}