"use client";
import React, { useState } from "react";
import ButtonProjectFilter from "./ButtonProjectFilter";
import ProjectCard from "./ProjectCard";

const filteredProjects = [
  {
    title: "Cook It. Android Version.",
    description: "Social network prototype about cooking recipes.",
    image: "/img/cookit_android.png",
    tag: ["All", "Android"],
    repo: true,
    gitPreviewUrl: "https://github.com/K-AM-US/Cook_It",
  },
  {
    title: "Cook It. iOS Version.",
    description: "Social network prototype about cooking recipes.",
    image: "/img/cookit_ios.png",
    tag: ["All", "iOS"],
    repo: true,
    gitPreviewUrl: "https://github.com/K-AM-US/Cook_It_iOS",
  },
  {
    title: "Capacitación Digital BG. Landing page.",
    description: "Course Company landing page",
    image: "/img/capacitacion-bg.png",
    tag: ["All", "Web"],
    repo: false,
    gitPreviewUrl: "https://capacitacionbg.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleClick = (selectedTag) => {
    setTag(selectedTag);
  };

  const newList = filteredProjects.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="mb-16 pt-20 md:pt-16">
      <div className="bg-gradient-to-br from-[#2A076C] to-red-500 h-1 mx-16 md:mx-32 mt-8"></div>
      <h1 className="text-5xl mt-16 mb-8">My Projects</h1>
      <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:justify-evenly mt-5 mx-2 md:mx-0 md:px-64 mb-16">
        <div className="place-self-center">
          <ButtonProjectFilter
            title={"All"}
            onClick={handleClick}
            isSelected={tag === "All"}
          />
        </div>
        <div className="place-self-center">
          <ButtonProjectFilter
            title={"Android"}
            onClick={handleClick}
            isSelected={tag === "Android"}
          />
        </div>
        <div className="place-self-center">
          <ButtonProjectFilter
            title={"iOS"}
            onClick={handleClick}
            isSelected={tag === "iOS"}
          />
        </div>
        <div className="place-self-center">
          <ButtonProjectFilter
            title={"Web"}
            onClick={handleClick}
            isSelected={tag === "Web"}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 gap-5">
        {newList.map((item, index) => (
          <div key={index}>
            <ProjectCard
              title={item.title}
              description={item.description}
              image={item.image}
              repo={item.repo}
              link={item.gitPreviewUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
