import React from 'react' 
import NavBar from '../Components/NavBar' 
import Features from '../Components/Features'
 
const Home = () => { 
  return ( 
    <> 
      <div className='w-screen h-screen bg-[#0B0130]'> 
        <NavBar/> 
 
        <div className="flex items-start justify-center pt-8 px-10"> 
          <div className="flex-1 ml-16 mt-0"> 
            <h1 className="text-5xl font-bold mb-4 text-white"> 
              Upload & Analyse <br/>Your Legal Documents 
            </h1> 
            <p className="text-lg text-white mb-6"> 
              Intelligent Legal Analysis to Enhance Transparency and Clarity 
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mb-8">
              <input 
                type="text" 
                placeholder="Ask Anything..." 
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="cursor-pointer w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Drag & Drop Section */}
            <div className="max-w-md">
              <div className="border-2 border-dashed border-gray-400 rounded-lg p-5 text-center bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm">
                <div className="mb-4">
                  <svg className="mx-auto w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Drag & drop your document here
                </h3>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors mb-3">
                  Browse Files
                </button>
              </div>
            </div>
          </div> 
 
          <div className="flex-1 flex justify-center -mr-12"> 
            <img  
              src="/images/home_img1.jpg"   
              className="rounded-lg shadow-lg w-[330px] h-[430px] object-cover" 
            /> 
          </div> 
        </div> 

        <Features/>
 
      </div> 
    </> 
  ) 
} 
 
export default Home