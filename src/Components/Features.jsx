import React from 'react'
import {Link} from "react-router-dom"

const Features = ({ onNavigate, templatesRef }) => {
  return (
    <div className="w-full bg-[#0B0130] py-16 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Feature Section
        </h2>

        <div className="space-y-8">
          
          {/* Feature 1 - Smart Contract Analyzer */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div 
                className="cursor-pointer bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg p-8 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => onNavigate("upload")}   // 🔹 scroll to upload section
              >
                <div className="flex">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Contract Analyzer</h3>
                    <p className="text-gray-700 mb-6 max-w-lg">
                      Upload any contract and get instant AI-powered insights. See summaries, risk flags, and key clauses extracted with clickable highlights in the document. Ask questions in chat and download a full report for easy review — fast, clear, and always at your fingertips.
                    </p>
                  </div>
                  <div className="flex-1 flex justify-end items-center">
                    <div className="w-80 h-48 bg-white rounded-lg shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Contract Templates */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <div 
                className="cursor-pointer bg-gradient-to-br from-purple-300 to-blue-200 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => onNavigate("templates")}   // 🔹 scroll to templates section
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contract Templates</h3>
                <p className="text-gray-700 mb-6 text-sm">
                  Access general contracts templates which are authentic from Indian government, and instantly export a tailored agreement in .docx format. Fast, flexible, and designed to fit your exact needs.
                </p>
                <div className="mb-6">
                  <div className="w-full h-32 bg-white rounded-lg shadow-lg"></div>
                </div>
              </div>

              {/* Feature 3 - Compare Contracts */}
              <Link to="compare">
                <div className="cursor-pointer bg-gradient-to-br from-purple-300 to-blue-200 rounded-lg p-6 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Compare Contracts</h3>
                  <p className="text-gray-700 mb-6 text-sm">
                    Quickly compare two or more contracts with AI-powered analysis. See clause-level differences, risks, and trade-offs, then get an advisory recommendation based on your chosen priorities — all explained in plain language. Ask questions in an interactive chat and get pointed directly to the relevant clauses.
                  </p>
                  <div className="mb-6">
                    <div className="w-full h-32 bg-white rounded-lg shadow-lg"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          </div>     
        </div>

      </div>
    
  )
}

export default Features
