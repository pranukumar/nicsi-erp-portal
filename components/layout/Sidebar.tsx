"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Admin", path: "/admin" },
    { name: "Vendors", path: "/vendors" },
    { name: "Tenders", path: "/tenders" },
    { name: "Empanelment", path: "/empanelment" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md min-h-screen">
      <ul className="p-4 space-y-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded ${
                pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}