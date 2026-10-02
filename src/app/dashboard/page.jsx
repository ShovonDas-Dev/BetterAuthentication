
"use client";

import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black p-4 text-white sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Welcome back! Here&apos;s what&apos;s happening today.
          </p>
        </div>

        <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200">
          + Add New
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-xl border border-gray-800 bg-[#111111] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">Total Users</p>

            <span className="rounded-lg bg-gray-800 px-3 py-2 text-sm">
              👤
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">1,245</h2>

          <p className="mt-2 text-sm text-green-400">
            ↑ 12.5%
            <span className="ml-1 text-gray-500">from last month</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-gray-800 bg-[#111111] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">Total Orders</p>

            <span className="rounded-lg bg-gray-800 px-3 py-2 text-sm">
              🛒
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">856</h2>

          <p className="mt-2 text-sm text-green-400">
            ↑ 8.2%
            <span className="ml-1 text-gray-500">from last month</span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-gray-800 bg-[#111111] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">Revenue</p>

            <span className="rounded-lg bg-gray-800 px-3 py-2 text-sm">
              $
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">$24,580</h2>

          <p className="mt-2 text-sm text-green-400">
            ↑ 15.8%
            <span className="ml-1 text-gray-500">from last month</span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl border border-gray-800 bg-[#111111] p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">
              Pending Orders
            </p>

            <span className="rounded-lg bg-gray-800 px-3 py-2 text-sm">
              ⏳
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">32</h2>

          <p className="mt-2 text-sm text-orange-400">
            5.4%
            <span className="ml-1 text-gray-500">of total orders</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="rounded-xl border border-gray-800 bg-[#111111] p-5 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Recent Orders
              </h2>

              <p className="text-sm text-gray-500">
                Latest customer orders
              </p>
            </div>

            <Link
              href="/orders"
              className="text-sm font-medium text-gray-300 hover:text-white hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-gray-800 text-sm text-gray-500">
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                <tr className="border-b border-gray-800">
                  <td className="py-4 font-medium text-white">John Doe</td>
                  <td className="py-4 text-gray-400">Laptop</td>
                  <td className="py-4 text-gray-300">$1,200</td>
                  <td className="py-4">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-4 font-medium text-white">Sarah Smith</td>
                  <td className="py-4 text-gray-400">Headphones</td>
                  <td className="py-4 text-gray-300">$250</td>
                  <td className="py-4">
                    <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-4 font-medium text-white">Michael Lee</td>
                  <td className="py-4 text-gray-400">Keyboard</td>
                  <td className="py-4 text-gray-300">$120</td>
                  <td className="py-4">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 font-medium text-white">Emma Wilson</td>
                  <td className="py-4 text-gray-400">Monitor</td>
                  <td className="py-4 text-gray-300">$480</td>
                  <td className="py-4">
                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
                      Cancelled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-gray-800 bg-[#111111] p-5">
          <h2 className="text-lg font-semibold text-white">Quick Actions</h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your dashboard
          </p>

          <div className="mt-5 space-y-3">
            <Link
              href="/users"
              className="block rounded-lg border border-gray-800 p-4 transition hover:border-gray-600 hover:bg-gray-900"
            >
              <p className="font-medium text-white">Manage Users</p>
              <p className="mt-1 text-sm text-gray-500">
                View and manage all users
              </p>
            </Link>

            <Link
              href="/products"
              className="block rounded-lg border border-gray-800 p-4 transition hover:border-gray-600 hover:bg-gray-900"
            >
              <p className="font-medium text-white">Products</p>
              <p className="mt-1 text-sm text-gray-500">
                Add or manage products
              </p>
            </Link>

            <Link
              href="/orders"
              className="block rounded-lg border border-gray-800 p-4 transition hover:border-gray-600 hover:bg-gray-900"
            >
              <p className="font-medium text-white">Orders</p>
              <p className="mt-1 text-sm text-gray-500">
                Check recent orders
              </p>
            </Link>

            <Link
              href="/settings"
              className="block rounded-lg border border-gray-800 p-4 transition hover:border-gray-600 hover:bg-gray-900"
            >
              <p className="font-medium text-white">Settings</p>
              <p className="mt-1 text-sm text-gray-500">
                Update your settings
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard