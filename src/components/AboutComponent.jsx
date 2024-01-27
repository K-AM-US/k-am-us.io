import React from "react";
import Image from "next/image";
import { RiSendPlane2Fill } from "react-icons/ri";

const AboutComponent = ({ img, title, data, side }) => {
  const imgOrder = side ? "order-last" : "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5 ">
      <Image
        src={img}
        width={350}
        height={350}
        className={`rounded-3xl col-span-1 place-self-center md:${imgOrder}`}
        alt=""
      />
      <div className="place-self-center flex flex-col w-full">
        <h1 className="col-span-1 text-3xl mb-4 flex self-center text-center border-b-2 ">
          {title}
        </h1>
        <div>
          {data.map((item, index) => (
            <span key={index} className="flex flex-row font-sans pl-16">
              <div className="place-self-center mr-3">
                <RiSendPlane2Fill />
              </div>
              <span className="text-xl mb-1">{item.title}</span>
              <span className="place-self-center ml-3 text-xl md:text-2xl">
                {item.icon}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
