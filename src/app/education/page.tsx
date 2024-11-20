export default function Education() {
    return (
      <div className="bg-slate-600 min-h-screen flex flex-col items-center pt-4 py-12 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mt-24 mb-4 underline text-cyan-300 animate-scale-up-down">Education</h1>
      <div className="container mx-auto p-8">
        <h2 className="text-3xl text-white font-semibold mb-4">Matric Education</h2>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-2xl font-bold"> Subject : Science</h3>
          <h3 className="text-xl font-bold"> School Name:</h3>
          <p className="text-lg">Hazrat Shah Jahnagir Acadmey, Year: 2021</p>         
        </div>
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl text-white font-semibold mb-4">Intermediate Education</h2>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-2xl font-bold"> Subject : Pre-Engineering</h3>
          <h3 className="text-xl font-bold"> Colloge Name:</h3>
          <p className="text-lg">Allama Iqbal Government Science Colloge , Year: 2022</p>         
        </div>
      </div>
      </div>
      </div>
      </div>
      
      
    );
  }
  