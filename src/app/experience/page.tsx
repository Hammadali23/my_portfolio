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
    description: "A Figma Design using HTML, CSS, and TypeScript.",
    image: "/Public/Images/figma.JPG",
    link: "https://figm-design.vercel.app",
    tech: [
      { id: "html5-static", icon: <FaHtml5 /> },
      { id: "css3-static", icon: <FaCss3Alt /> },
      { id: "nodejs-static", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js.",
    image: "/portfolio.png",
    link: "", // Empty link to be handled
    tech: [
      { id: "react-portfolio", icon: <FaReact /> },
      { id: "css3-portfolio", icon: <FaCss3Alt /> },
      { id: "html5-portfolio", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Dynamic Resume Builder",
    description: "A dynamic resume builder using HTML, CSS, and TypeScript.",
    image: "/dynamic-resume-builder.PNG",
    link: "", // Valid link
    tech: [
      { id: "html5-dynamic", icon: <FaHtml5 /> },
      { id: "css3-dynamic", icon: <FaCss3Alt /> },
      { id: "nodejs-dynamic", icon: <FaNodeJs /> },
    ],
  },
  {
    title: "Editable Resume with Unique Path",
    description: "Editable resume with a unique path and shareable link.",
    image: "/resume-builder-with-unique-path.png",
    link: "", // Ensure the link is valid
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
        <h1 className="text-4xl font-bold text-center mt-12 mb-8 underline text-cyan-300">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
