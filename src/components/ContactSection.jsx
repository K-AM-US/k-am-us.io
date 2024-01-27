import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="pt-10 md:pt-0">
      <div className="bg-gradient-to-br from-[#2A076C] to-red-500 h-1 mx-16 md:mx-32 mt-16"></div>
      <h1 className="mt-16 text-5xl mb-8">Let&apos;s Connect!</h1>
      <div>
        <div className="px-4 py-4 lg:px-16 lg|:py-8 font-sans text-justify">
          Looking for new contacts, experiences and opportunities, feel free to
          message me for work, doubts, team up or just to say hi.
          <div className="flex flex-row justify-around px-16 lg:px-28 text-5xl my-8">
            <Link
              href={"https://github.com/K-AM-US"}
              className="hover:scale-125"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/mauricio-casillas-1446a9276/"}
              className="hover:scale-125"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
