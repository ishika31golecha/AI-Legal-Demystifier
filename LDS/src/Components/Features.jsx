import React from 'react'

const Features = () => {
  return (
    <div className="w-full bg-[#0B0130] py-16 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Feature Section
        </h2>

        <div className="space-y-8">
          
          {/* Feature 1 - Centered Large Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="cursor-pointer bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg p-8 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Feature 1</h3>
                    <p className="text-gray-700 mb-6 max-w-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="flex-1 flex justify-end items-center">
                    <div className="w-80 h-48 bg-white rounded-lg shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* Feature 2 */}
              <div className="cursor-pointer bg-gradient-to-br from-purple-300 to-blue-200 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Feature 2</h3>
                <p className="text-gray-700 mb-6 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="mb-6">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg"></div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="cursor-pointer bg-gradient-to-br from-purple-300 to-blue-200 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Feature 3</h3>
                <p className="text-gray-700 mb-6 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="mb-6">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Document Templates Section */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              Legal Document Templates
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer">
              Explore More
            </button>
          </div>
          
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="cursor-pointer flex space-x-4 min-w-max">
              <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl" onClick={() => window.open('/nda', '_blank')}>
                <h4 className="text-gray-800 font-semibold mb-2">Lease Agreement</h4>
              </div>
              
              <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h4 className="text-gray-800 font-semibold mb-2">Non-Disclosure Agreement</h4>
              </div>
              
              <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h4 className="text-gray-800 font-semibold mb-2">Employment Contract</h4>
              </div>

              <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h4 className="text-gray-800 font-semibold mb-2">Service Agreement</h4>
              </div>

              <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h4 className="text-gray-800 font-semibold mb-2">Partnership Agreement</h4>
              </div>

              <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h4 className="text-gray-800 font-semibold mb-2">Privacy Policy</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features