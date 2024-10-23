"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site Logo */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <div className="flex flex-1 items-center">
            <Link
              href = "/"
              className="text-white hover:text-gray-200"
            >
              Home
            </Link>
          </div>

          <div className="flex flex-1 items-center">
            <Link
              href = "/aboutUs"
              className="text-white hover:text-gray-200"
            >
              About
            </Link>
          </div>

          <div className="flex flex-1 items-center">
            <Link
              href = {`/projects`}
              className="text-white hover:text-gray-200"
            >
              Projects
            </Link>
          </div>

          <div className="flex flex-1 items-center">
            <Link
              href = "/blog"
              className="text-white hover:text-gray-200"
            >
              Blog
            </Link>
          </div>

          <div className="flex flex-1 items-center">
            <Link
              href = "/contactUs"
              className="text-white hover:text-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
