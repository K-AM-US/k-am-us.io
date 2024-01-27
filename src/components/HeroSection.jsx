import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-12 md:mt-28 lg:mt-16 h-[90vh]">
        <div className="col-span-7 place-self-center text-center lg:text-left">
          <h1 className="mt-14 md:mt-0 text-4xl md:text-5xl">
            <span className="md:mt-0 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#2A076C] to-red-500">
              Hello, I&apos;m...
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mauricio",
                1000,
                "Web Developer",
                1000,
                "Android Developer",
                1000,
                "iOS Developer",
                1000,
                "Gamer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
          <p className="text-justify font-sans">
            I&apos;m a Computer Engineer focused on Software Dev, currently
            I&apos;m looking for Full stack Web and Mobile development
            experience. Curious about Linux. I love videogames, so, I&apos;m
            into PC gaming, Computer Graphics and time to time in Videogames
            Development. Music is part of my everyday life.
          </p>
          <div>
            <button className="font-sans py-1 px-1 rounded-full w-full mt-5 sm:w-fit bg-transparent bg-gradient-to-br from-[#2A076C] to-red-500 mx-auto block">
              <span className="block bg-[#131313] rounded-full py-2 px-7">
                <Link href={"/files/MauricioCasillas_Resume.pdf"}>
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[350px] h-[350px] relative">
            <Image
              src={"/img/avatar.jpg"}
              alt="Hero Image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
