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

interface NavigationProps {
  viewport?: "Mobile" | "Desktop";
}

export default function Navigation({ viewport = "Desktop" }: NavigationProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigation = data.map(({ title, href }, index) => (
    <li
      key={index}
      className="list-none text-center hover:text-black md:text-left md:hover:text-white"
    >
      <Link href={`#${href}`}>{title}</Link>
    </li>
  ));

  if (viewport === "Desktop") {
    return (
      <>
        <div className="relative z-50 hidden items-center gap-4 md:flex">
          <nav>
            <ul className="flex items-center gap-4">{navigation}</ul>
          </nav>

          <button className="rounded-full bg-white px-8 py-4 font-fraunces uppercase text-black transition hover:bg-white/25">
            Contact
          </button>
        </div>
        {showMobileMenu && (
          <div
            className="fixed inset-0 z-40 hidden bg-transparent md:block"
            onClick={() => setShowMobileMenu(false)}
          ></div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative z-50 md:hidden">
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

            <button className="w-min rounded-full bg-yellow-400 px-8 py-4 font-fraunces uppercase text-black transition hover:bg-yellow-500">
              Contact
            </button>
          </div>
        )}
      </div>
      {showMobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-transparent md:hidden"
          onClick={() => setShowMobileMenu(false)}
        ></div>
      )}
    </>
  );
}
