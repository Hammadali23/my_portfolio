import { SiAdobephotoshop } from "react-icons/si";
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaPaintBrush, FaBullhorn, FaLaptopCode, FaMicrosoft, FaVideo } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Frontend Development"  , icon: <FaCode /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind CSS", icon: <FaPaintBrush /> },
    { name: "SEO", icon: <FaBullhorn /> },
    { name: "Digital Marketing", icon: <FaLaptopCode /> },
    { name: "Ms-Office", icon: <FaMicrosoft /> },
    { name: "Photoshop CS6", icon: <SiAdobephotoshop /> },
    { name: "Video Editing", icon: <FaVideo /> },
    { name: "CIT", icon: <FaLaptopCode /> },
  ];

  return (
    <div className="bg-slate-600 min-h-screen flex justify-center">
      <div className="container mx-auto p-6">
        <h2 className="text-5xl font-bold mb-8 mt-24 text-cyan-300 text-center animate-scale-up-down underline">
          Skills
        </h2>
        <div className=" grid md:grid-cols-3 md:grid-rows-3  sm:grid-cols-1 gap-4 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4  text-3xl  flex items-center space-x-3 bg-blue-200 dark:bg-gray-900  shadow-md animate-slide-in rounded-xl font-serif"
            >
              <span className="text-red-600  ">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
