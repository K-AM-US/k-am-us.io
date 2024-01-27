import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, image, repo, link }) => {
  const linkToRepo = repo ? <FaGithub /> : <FaLink />;

  return (
    <div className="max-w-sm rounded overflow-hidden min-h-0 min-full mx-auto">
      <Image
        src={image}
        width={300}
        height={100}
        className="w-full h-48 rounded-t-3xl object-cover"
        alt={`Project Image: ${title}`}
      ></Image>
      <div className="px-1 py-1 bg-gradient-to-br from-[#2A076C] to bg-red-500 rounded-b-3xl">
        <div className="bg-[#131313] px-5 py-3 rounded-b-3xl">
          <h1 className="text-2xl mb-5 h-16">{title}</h1>
          <p className="text-justify font-sans h-28">{description}</p>
          <div className="flex mt-5 mb-3">
            <Link
              href={link}
              className="mx-auto text-3xl text-slate-600 hover:text-white hover:rounded-full hover:scale-150"
            >
              {linkToRepo}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
