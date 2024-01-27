import Image from "next/image";
import React from "react";

const AchievementCard = ({ title, img }) => {
  return (
    <div className="px-10 h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-center mb-8">{title}</h1>
      <Image src={img} width={330} height={330} className="mx-auto" alt="" />
    </div>
  );
};

export default AchievementCard;
