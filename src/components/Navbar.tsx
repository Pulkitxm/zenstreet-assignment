import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-3xl font-bold text-gray-900">
          Zenstreet
        </Link>
      </div>
    </header>
  );
}
