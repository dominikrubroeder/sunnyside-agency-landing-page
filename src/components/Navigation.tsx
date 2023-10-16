"use client";

import Link from "next/link";
import { useState } from "react";

const data = [
  {
    title: "About",
    href: "about",
  },
  {
    title: "Services",
    href: "services",
  },
  {
    title: "Projects",
    href: "projects",
  },
];

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigation = data.map(({ title, href }, index) => (
    <li key={index} className="list-none text-center md:text-left">
      <Link href={`#${href}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      <div className="hidden items-center gap-2 md:flex">
        <nav>
          <ul className="flex items-center gap-4">{navigation}</ul>
        </nav>

        <button className="rounded-full bg-white px-8 py-4 uppercase text-black transition hover:bg-white/25">
          Contact
        </button>
      </div>

      <div className="relative md:hidden">
        <button
          className="group grid gap-1.5"
          onClick={() => setShowMobileMenu((previousState) => !previousState)}
        >
          <span className="h-0.5 w-6 bg-white/50 group-hover:bg-white"></span>
          <span className="h-0.5 w-6 bg-white/50 group-hover:bg-white"></span>
          <span className="h-0.5 w-6 bg-white/50 group-hover:bg-white"></span>
        </button>

        {showMobileMenu && (
          <div className="animate-fadeUpScale triangle absolute right-0 top-16 grid w-80 justify-center gap-8 bg-white p-8 text-gray-400 before:absolute before:right-0 before:top-[-24px]">
            {navigation}

            <button className="w-min rounded-full bg-yellow-400 px-8 py-4 uppercase text-black transition">
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  );
}
