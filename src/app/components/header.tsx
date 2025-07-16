"use client";

import Link from "next/link";
import SectionWrapper from "@/app/components/section-wrapper";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 py-4 shadow-sm mb-6">
      <SectionWrapper>
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-gray-800 p-2">
            A11y Marketplace
          </h1>

          <menu className="mt-2 flex gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/new" className="hover:underline">
                Post new ad
              </Link>
            </li>
          </menu>
        </div>
      </SectionWrapper>
    </header>
  );
}
