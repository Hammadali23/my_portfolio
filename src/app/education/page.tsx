export default function Education() {
  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center pt-4 py-12 px-4 dark:bg-slate-600">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mt-24 mb-4 underline text-cyan-300 animate-scale-up-down">
          Education
        </h1>
        <div className="container mx-auto p-8 animate-slide-in">
          <h2 className="text-3xl text-white font-semibold mb-4 dark:text-cyan-400">Matric Education</h2>
          <div className="p-4 bg-gray-100 rounded shadow-md dark:bg-gray-800">
            <h3 className="text-2xl font-bold dark:text-blue-300">Subject: Science</h3>
            <h3 className="text-xl font-bold dark:text-blue-300">School Name:</h3>
            <p className="text-lg dark:text-gray-300">Hazrat Shah Jahnagir Academy, Year: 2020</p>
          </div>
          <div className="container mx-auto mt-8">
            <h2 className="text-3xl text-white font-semibold mb-4 dark:text-cyan-400">Intermediate Education</h2>
            <div className="p-4 bg-gray-100 rounded shadow-md dark:bg-gray-800">
              <h3 className="text-2xl font-bold dark:text-blue-300">Subject: Pre-Engineering</h3>
              <h3 className="text-xl font-bold dark:text-blue-300">College Name:</h3>
              <p className="text-lg dark:text-gray-300">Allama Iqbal Government Science College, Year: 2022</p>
            </div>

            {/* Courses */}
            <h1 className="text-4xl font-bold text-center mt-16 pb-8 underline text-cyan-300 animate-scale-up-down">
              Courses
            </h1>
            <div className="container mx-auto mt-8">
              <h2 className="text-3xl text-white font-semibold mb-4 dark:text-cyan-400">Web Development (In Progress)</h2>
              <div className="p-4 bg-gray-100 rounded shadow-md dark:bg-gray-800">
                <h3 className="text-2xl font-bold dark:text-blue-300">Course Name:</h3>
                <p className="text-lg dark:text-gray-300">Certified AI, Metaverse, and Web 3.0 Developer & Solopreneur</p>
                <h3 className="text-2xl font-bold dark:text-blue-300">Center Name:</h3>
                <p className="text-lg dark:text-gray-300">Governor House Karachi</p>
                <h3 className="text-xl font-bold dark:text-blue-300">Time Period:</h3>
                <p className="text-lg dark:text-gray-300">A one year Web 3.0 and Metaverse Developer program</p>
              </div>
              <div className="container mx-auto mt-8">
                <h2 className="text-3xl text-white font-semibold mb-4 dark:text-cyan-400">Computer Information Technology</h2>
                <div className="p-4 bg-gray-100 rounded shadow-md dark:bg-gray-800">
                  <h3 className="text-2xl font-bold dark:text-blue-300">Center Name:</h3>
                  <p className="text-lg dark:text-gray-300">The Professor Academy</p>
                  <h3 className="text-2xl font-bold dark:text-blue-300">Course Including:</h3>
                  <p className="text-lg dark:text-gray-300">
                    (1) Ms-Office <br /> (2) Photoshop CS6
                  </p>
                  <h3 className="text-2xl font-bold dark:text-blue-300">Course Period:</h3>
                  <p className="text-lg dark:text-gray-300">6 Months Course (Year: 2019)</p>
                </div>
                <div className="container mx-auto mt-8">
                  <h2 className="text-3xl text-white font-semibold mb-4 dark:text-cyan-400">Digital Marketing</h2>
                  <div className="p-4 bg-gray-100 rounded shadow-md dark:bg-gray-800">
                    <h3 className="text-2xl font-bold dark:text-blue-300">Center Name:</h3>
                    <p className="text-lg dark:text-gray-300">Aptech Metro</p>
                    <h3 className="text-2xl font-bold dark:text-blue-300">Course Including:</h3>
                    <p className="text-lg dark:text-gray-300">
                      (1) SEO <br /> (2) Wordpress <br /> (3) Social Media Marketing <br />
                      (4) Email Marketing
                    </p>
                    <h3 className="text-2xl font-bold dark:text-blue-300">Course Period:</h3>
                    <p className="text-lg dark:text-gray-300">6 Months Course (Year: 2024)</p>
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
