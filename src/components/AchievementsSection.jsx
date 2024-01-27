import React from "react";
import AchievementCard from "./AchievementCard";

const achievements = [
  {
    title: "Graduated from School of Engineering at UNAM. 2023.",
    img: "/img/fi.png",
  },
  {
    title: "Second place AWS Educate. Transport category. UNAM Hackathon 2020.",
    img: "/img/aws.png",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="pt-10 md:pt-8">
      <div className="bg-gradient-to-br from-[#2A076C] to-red-500 h-1 mx-16 md:mx-32 mt-16"></div>
      <h1 className="mt-16 text-5xl mb-8">Achievents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {achievements.map((item, index) => (
          <div key={index}>
            <AchievementCard title={item.title} img={item.img} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
