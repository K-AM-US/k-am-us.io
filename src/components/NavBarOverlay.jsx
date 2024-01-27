import Link from "next/link";
import React from "react";

const NavBarOverlay = ({ sections }) => {
  return (
    <div>
      <ul className="flex flex-col items-center">
        {sections.map((link, index) => (
          <li key={index} className="my-2 md:mx-3 lg:mx-5">
            <Link
              href={link.href}
              className=" text-white text-xl md:text-2xl lg:text-3xl hover:text-slate-500 font-sans"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarOverlay;
