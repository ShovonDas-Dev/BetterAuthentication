"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {
  const { data } = authClient.useSession();

  const links = (
    <>
      {data?.user ? (
        <>
          <h1>{data.user.name}</h1>

          <button
            onClick={() => authClient.signOut()}
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-red-500 hover:bg-red-950 hover:text-red-300"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link
            href="/singIn"
            className="rounded-lg border border-gray-600 px-4 py-2 text-sm hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            href="/singUp"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200"
          >
            Register
          </Link>
        </>
      )}
    </>
  );

  return (
    <nav className="border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyAuth
        </Link>

        {/* Middle Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/home"
            className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            Services
          </Link>

         {data?.user && <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            Dashboard
          </Link>}

          {data?.user && 
          <>
          <Link
            href="/profile"
            className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            Profile
          </Link>
          <Link
            href="/update-user"
            className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
          >
            Update-User
          </Link>
          </>}
          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {links}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;