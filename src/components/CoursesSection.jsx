import React from "react";

const courses = [
  {
    title: "App development for mobile devices 10th issue.",
    info: "Dirección General de Computo y Tecnología de Información y Comunicación. UNAM",
    year: "2023.",
  },
  {
    title: "Elastic Google Cloud Infrastructure: Scaling and Automation.",
    info: "Google Coursera.",
    year: "2022.",
  },
  {
    title: "Essential Google Cloud Infrastructure: Core Services.",
    info: "Google Coursera.",
    year: "2022.",
  },
  {
    title: "Essential Google Cloud Infrastructure: Foundation.",
    info: "Google Coursera.",
    year: "2022.",
  },
  {
    title: "Google Cloud Fundamentals: Core Infrastructure.",
    info: "Google Coursera.",
    year: "2022.",
  },
  {
    title: "Preparing your Associate Cloud Engineer Journey.",
    info: "Google Coursera.",
    year: "2022.",
  },
  {
    title: "Reliable Google Cloud Infrastructure: Design and Process.",
    info: "Google Coursera.",
    year: "2022.",
  },
  {
    title: "CCNAv7: Enterprise Networks, Security and Automation.",
    info: "Cisco. Netacad.",
    year: "2021.",
  },
  {
    title: "CCNAv7: Switching, Routing and Wireless Essentials.",
    info: "Cisco. Netacad.",
    year: "2021.",
  },
  {
    title: "CCNAv7: Introduction to Networks.",
    info: "Cisco. Netacad.",
    year: "2021.",
  },
  {
    title: "Introduction to HTML5.",
    info: "University of Michigan.",
    year: "2020.",
  },
  {
    title: "Introduction to CSS3.",
    info: "University of Michigan.",
    year: "2020.",
  },
  {
    title: "Interactivity with JavaScript.",
    info: "University of Michigan.",
    year: "2020.",
  },
  {
    title: "Advance Styling with Responsive Design",
    info: "University of Michigan.",
    year: "2020.",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="pt-10 md:pt-8">
      <div className="bg-gradient-to-br from-[#2A076C] to-red-500 h-1 mx-16 md:mx-32 mt-16"></div>
      <h1 className="mt-16 text-5xl mb-8">Courses</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 p-3">
        {courses.map((item, index) => (
          <li
            key={index}
            className="col-span-1 font-sans bg-gradient-to-br from-[#2A076C] to-red-500 rounded-xl p-1"
          >
            <div className="bg-[#131313] rounded-xl px-3 p-3 h-full">
              <h4 className="text-lg text-left ">{item.title}</h4>
              <div className="text-[#808080]  text-justify ">
                <p className="">{item.info}</p>
                <p className="">{item.year}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoursesSection;
