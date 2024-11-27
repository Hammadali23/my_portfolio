import Image from 'next/image'
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-800 text-white min-h-screen">
      <div className="flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-4xl mt-20 font-semibold mb-4 marquee-left text-center">
          Welcome To My Portfolio
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-40 h-screen bg-gradient-to-r from-black to-gray-500 text-white">
        <div className="flex items-center space-x-8 slide-in-left">
        <Image
      src="/images/ali.png"
      alt="author"
      width={500} 
      height={500}    
    className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 -mt-10 md:-mt-20 rounded-full"/>
        </div>
        <div className="text-center lg:text-right lg:-mt-20 px-4">
          <h1 className="text-xl md:text-3xl text-green-400 mb-6 lg:mb-10 animate-bounce">
            Hello Everyone,
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-6 lg:mb-10 font-bold font-serif slide-in-left">
            I Am <br />
            Hammad Ali
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-center mt-2 border-4 border-green-600 slide-in-left p-2 lg:p-4">
            Frontend Developer | UI/UX Enthusiast
          </p>
          <a href="cv.pdf" rel="noopener noreferrer">
            <div className="flex justify-center lg:justify-start mt-5 slide-in-left">
              <button className="mt-4 px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-full border-2 text-sm md:text-xl hover:bg-green-500 transform transition-transform duration-100 hover:scale-110">
                Download Resume
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
