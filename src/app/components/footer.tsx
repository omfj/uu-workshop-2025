import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 text-sm text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} A11y Marketplace. All rights
          reserved.
        </div>

        <menu className="flex gap-4 mt-2 sm:mt-0">
          <li>
            <Link href="/#faq" className="hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
        </menu>
      </div>
    </footer>
  );
}
