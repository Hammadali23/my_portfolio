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
          <p className="text-lg">Hazrat Shah Jahnagir Acadmey, Year: 2020</p>         
        </div>
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl text-white font-semibold mb-4">Intermediate Education</h2>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-2xl font-bold"> Subject : Pre-Engineering</h3>
          <h3 className="text-xl font-bold"> Colloge Name:</h3>
          <p className="text-lg">Allama Iqbal Government Science Colloge , Year: 2022</p>         
        </div>

         {/* Courses */}

        <h1 className="text-4xl font-bold text-center mt-16 pb-8 underline text-cyan-300 animate-scale-up-down">Courses</h1>
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl text-white font-semibold mb-4">Web Development (In Progress) </h2>
        <div className="p-4 bg-gray-100 rounded shadow-md">
        <h3 className="text-2xl font-bold"> Course Name:</h3>
        <p className="text-lg">Certified AI, Metaverse, and Web 3.0 Developer & Solopreneur</p>      
          <h3 className="text-2xl font-bold"> Center Name:</h3>
          <p className="text-lg">Governor House Karachi</p> 
          <h3 className="text-xl font-bold">Time Period:</h3>
          <p className="text-lg">A one year Web 3.0 and Metaverse Developer programe</p>         
        </div>
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl text-white font-semibold mb-4">Computer Information Technology</h2>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-2xl font-bold"> Center Name:</h3>
          <p className="text-lg">The Professor Acadmey </p> 
          <h3 className="text-2xl font-bold"> Course Including:</h3>
          <p className="text-lg">Ms-Office <br /> Photoshop CS6</p> 
          <h3 className="text-2xl font-bold"> Course Period:</h3>
          <p className="text-lg">6 Months Course (Year: 2019)</p>        
        </div>
        <div className="container mx-auto mt-8">
        <h2 className="text-3xl text-white font-semibold mb-4">Digital Marketing</h2>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-2xl font-bold"> Center Name:</h3>
          <p className="text-lg">Aptech Metro</p> 
          <h3 className="text-2xl font-bold"> Course Including:</h3>
          <p className="text-lg">(1) SEO <br /> (2) Wordpress <br /> (3) Social Media Marketing <br />(4) Email Marketing </p> 
          <h3 className="text-2xl font-bold"> Course Period:</h3>
          <p className="text-lg">6 Months Course (Year: 2024)</p>        
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      
    );
  }
  