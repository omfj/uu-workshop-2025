"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/app/components/section-wrapper";

const colors = ["bg-blue-600", "bg-red-600", "bg-green-600", "bg-yellow-600"];

export default function Header() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex: number) => (prevIndex + 1) % colors.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-gray-100 py-4 shadow-sm mb-6">
      <SectionWrapper>
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <h1
            className={`${colors[colorIndex]} text-2xl font-bold text-gray-800 p-2`}
          >
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
