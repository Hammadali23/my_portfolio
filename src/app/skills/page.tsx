export default function Skills() {
    const skills = ["Frontend Development","HTML", "CSS", "JavaScript",  "Tailwind CSS", "SEO", "Digital Maketing", "Ms-Office", "Photoshop CS6", "Video Editing", "CIT"];
  
    return (
      <div className="bg-slate-600  min-h-screen flex  justify-center">
      <div className="container mx-auto p-6">
        <h2 className="text-5xl font-bold mb-8 mt-24 text-cyan-300 text-center animate-scale-up-down underline">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map(skill => (
            <div key={skill} className="p-4 text-2xl items-center bg-blue-200 rounded shadow-md animate-slide-in ">
              {skill}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
  