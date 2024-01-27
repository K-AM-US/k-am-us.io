"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import NavBarOverlay from "./NavBarOverlay";

const sections = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Achievements",
    href: "#achievements",
  },
  {
    title: "Courses",
    href: "#courses",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-70">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="md:mx-auto">
          <span className=" text-3xl font-extrabold mr-2">K-AM-US</span>
          <span className="font-sans text-xl text-slate-500">
            Mauricio Casillas
          </span>
        </Link>
        <div className="block md:hidden">
          {!menuOpen ? (
            <button
              onClick={() => setMenuOpen(true)}
              className="border rounded-lg p-2"
            >
              <TiThMenu className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(false)}
              className="border rounded-lg p-2"
            >
              <CgCloseR className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto md:mx-auto">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {sections.map((link, index) => (
              <li key={index} className="md:pl-5">
                <Link
                  href={link.href}
                  className="text-xl md:text-2xl lg:text-3xl text-slate-500 hover:text-white font-sans block py-2 pl-3 md:p-0"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menuOpen ? <NavBarOverlay sections={sections} /> : null}
    </nav>
  );
};

export default NavBar;
