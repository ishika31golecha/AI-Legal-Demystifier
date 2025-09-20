import React,{useState} from 'react'
import NavBar from '../Components/NavBar'
import plus from '../assets/plus.svg'
import contract from '../assets/contract.svg'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const contractAnalysis = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
      <div className='w-screen min-h-screen bg-[#0B0130] text-white '>
        <NavBar />
        <div className="space-y-8 mt-15 mb-12">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="cursor-pointer bg-[#BABCDE] rounded-lg p-8 relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Document Summary</h2>
              <div className="w-full h-full bg-white rounded-lg p-8">
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero adipisci, in a provident excepturi dolore, repudiandae nobis corrupti asperiores, accusamus similique. Sint expedita voluptatum est sequi possimus aperiam enim fugit tempora magnam omnis pariatur, illum nulla, nemo repellat dolor, ipsam perspiciatis nihil beatae at. Minima recusandae fugiat natus illum.  </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
           
            <div className="cursor-pointer p-6 bg-[#BABCDE] rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contract Templates</h3>
              
              <div className="mb-6">
                <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-direction-row">
                  <ul className="text-gray-700 mb-6 text-md p-6 list-disc list-inside">
                    <li className='text-red-500'>Risky</li>
                    <li className='text-yellow-500'>Mistakes</li>
                    <li className='text-green-500'>Safe</li>
                  </ul>
                  <ul className="text-gray-700 mb-6 text-md p-6">
                    <li>Unclear payment terms</li>
                    <li>Vague confidentiality clause</li>
                    <li>Termination clause</li>
                  </ul>
                </div>
              </div>
            </div>

            
            <div className="cursor-pointer bg-[#BABCDE] rounded-lg p-6 h-full ">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Terms Extraction</h3>
              <div className="mb-6">
                <div className="w-100 h-full bg-white rounded-lg shadow-lg">
                  <ul className="text-gray-700 mb-6 text-md p-6 list-disc list-inside">
                    <li>Termination</li>
                    <li>Payment Terms</li>
                    <li>Confidentiality</li>
                    <li>Readability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Floating Chatbot Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          💬
        </button>

        {/* Sidebar Chatbot */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl flex flex-col z-50">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-lg font-semibold text-gray-800">Chat with Docs</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="p-2 bg-gray-200 text-gray-800 rounded-lg self-start max-w-xs">
                Hi! Ask me anything about your document.
              </div>
              <div className="p-2 bg-blue-500 text-white rounded-lg self-end max-w-xs">
                What are the payment terms?
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-300 flex items-center">
              <input
                type="text"
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  )
}

export default contractAnalysis