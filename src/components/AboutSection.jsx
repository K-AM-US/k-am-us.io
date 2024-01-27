import Image from "next/image";
import React from "react";
import AboutComponent from "./AboutComponent";
import { TbWorld } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple, FaBlender } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";

import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandKotlin } from "react-icons/tb";
import { DiSwift } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

import { TbSql } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbFileTypeXml } from "react-icons/tb";

import { FaReact } from "react-icons/fa";
import { SiDjango, SiMicropython } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import { BiLogoBlender } from "react-icons/bi";
import { IoIosGitMerge } from "react-icons/io";
import { FaUnity } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="mt-0 md:mt-0 md:pt-10">
      <h1 className="text-5xl mb-8 pt-28 md:pt-24">About me</h1>
      <div>
        <AboutComponent
          img={"/img/interests.png"}
          title={"Interests"}
          data={[
            {
              title: "Web Development",
              icon: <TbWorld />,
            },
            {
              title: "Android Development",
              icon: <IoLogoAndroid />,
            },
            {
              title: "iOS Development",
              icon: <FaApple />,
            },
            {
              title: "Videogame Development",
              icon: <IoGameControllerOutline />,
            },
          ]}
          side={false}
        />
        <AboutComponent
          img={"/img/about.jpg"}
          title={"Programming Languages"}
          data={[
            {
              title: "JavaScript",
              icon: <IoLogoJavascript />,
            },
            {
              title: "Kotlin",
              icon: <TbBrandKotlin />,
            },
            {
              title: "Swift",
              icon: <DiSwift />,
            },
            {
              title: "Python",
              icon: <FaPython />,
            },
            {
              title: "Java",
              icon: <FaJava />,
            },
            {
              title: "C#",
              icon: <TbBrandCSharp />,
            },
          ]}
          side={true}
        />
        <AboutComponent
          img={"/img/otherLang.png"}
          title={"Other Languages"}
          data={[
            {
              title: "SQL",
              icon: <TbSql />,
            },
            {
              title: "HTML",
              icon: <FaHtml5 />,
            },
            {
              title: "CSS",
              icon: <FaCss3Alt />,
            },
            {
              title: "XML",
              icon: <TbFileTypeXml />,
            },
          ]}
          side={false}
        />
        <AboutComponent
          img={"/img/tools.jpg"}
          title={"Tools and Tecnologies"}
          data={[
            {
              title: "React",
              icon: <FaReact />,
            },
            {
              title: "Django",
              icon: <SiDjango />,
            },
            {
              title: "Tailwind",
              icon: <SiTailwindcss />,
            },
            {
              title: "Android Studio",
              icon: <SiAndroidstudio />,
            },
            {
              title: "Xcode",
              icon: <SiXcode />,
            },
            {
              title: "Blender",
              icon: <BiLogoBlender />,
            },
            {
              title: "Git",
              icon: <IoIosGitMerge />,
            },
            {
              title: "Unity",
              icon: <FaUnity />,
            },
          ]}
          side={true}
        />
      </div>
    </section>
  );
};

export default AboutSection;
