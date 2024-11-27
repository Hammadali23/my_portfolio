import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: { id: string; icon: JSX.Element }[];
}

const Projects: Project[] = [
  {
    title: "Figma Design",
    description: "This project brings a Figma design to life using Next.js. It focuses on creating a responsive and dynamic UI, maintaining pixel-perfect accuracy and modern web development standards.",
    image: "/images/figma.JPG",
    link: "https://figm-design.vercel.app/",
    tech: [
      { id: "html5-static", icon: <FaHtml5 /> },
      { id: "css3-static", icon: <FaCss3Alt /> },
      { id: "nodejs-static", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Currency Converter",
    description: "A simple and responsive currency converter built with HTML, CSS, and JavaScript, allowing users to convert currencies using real-time exchange rates.",
    image: "/images/calculator.jpg",
    link: "https://currency-converter-project-nine.vercel.app/", // Empty link to be handled
    tech: [
      { id: "react-portfolio", icon: <FaReact /> },
      { id: "css3-portfolio", icon: <FaCss3Alt /> },
      { id: "html5-portfolio", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Dynamic Resume Builder",
    description: "A dynamic resume builder created using HTML, CSS, and TypeScript. This tool allows users to input their details, customize sections, and generate a personalized resume. ",
    image: "/images/dynamic.jpg",
    link: "https://dynamic-resume-builder-gilt.vercel.app/", // Valid link
    tech: [
      { id: "html5-dynamic", icon: <FaHtml5 /> },
      { id: "css3-dynamic", icon: <FaCss3Alt /> },
      { id: "nodejs-dynamic", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Simple Calculator",
    description: "A basic calculator built with HTML, CSS, and JavaScript that performs arithmetic operations like addition, subtraction, multiplication, and division. ",
    image: "/images/simple.jpg",
    link: "https://simple-calculator-ten-wheat.vercel.app/", // Valid link
    tech: [
      { id: "html5-dynamic", icon: <FaHtml5 /> },
      { id: "css3-dynamic", icon: <FaCss3Alt /> },
      { id: "nodejs-dynamic", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Periodic Table",
    description: "A static periodic table built with HTML and CSS, displaying chemical elements with their symbols and atomic numbers.",
    image: "/images/periodic",
    link: "https://periodic-table-iota-seven.vercel.app/", 
    tech: [
      { id: "html5-editable", icon: <FaHtml5 /> },
      { id: "css3-editable", icon: <FaCss3Alt /> },
      { id: "nodejs-editable", icon: <FaNodeJs /> },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mt-12 mb-8 underline text-cyan-300 animate-scale-up-down">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-cyan-300">{project.title}</h2>
                <p className="text-gray-400 text-sm my-2">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.tech.map((techIcon) => (
                    <span key={techIcon.id} className="text-cyan-400 text-xl">
                      {techIcon.icon}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:underline"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="text-red-400">Link not available</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
