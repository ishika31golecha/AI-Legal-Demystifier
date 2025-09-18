import React from 'react'
import NavBar from '../Components/NavBar'
import plus from '../assets/plus.svg'
import contract from '../assets/contract.svg'
import {Link} from 'react-router-dom'

const ComparativeAnalysis = () => {
  return (
    <>
      <div className='w-screen min-h-screen bg-[#0B0130] text-white'>
        <NavBar />

        {/* Header */}
        <div className="px-16 pt-10">
          <h1 className="text-4xl font-bold">Compare Contracts - Find the better deal</h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl">
            Upload two or more agreements and our AI compares risk, fairness, and key commercial terms —
            then advises which is better for your goals.
          </p>
        </div>

        {/* Upload & Recommendation Section */}
        <div className="flex gap-10 px-48 mt-15 flex-wrap">
          {/* Upload Panel */}
          <div className="bg-[#1a0a40] p-6 rounded-xl flex-1 min-w-[320px] ">
            <h2 className="text-xl font-semibold mb-6">Upload your Documents</h2>
            <div className="flex gap-4">
              <div className="flex-1 bg-[#280652] rounded-lg p-5 text-center cursor-pointer">
                <div className='flex items-center justify-center gap-5 mb-7'>
                  <img className="h-9" src={contract} alt="" />
                  <p className="font-medium">Contract A</p>
                </div>
                <p className="text-sm text-gray-300">Drag & drop files</p>
              </div>
              <div className="flex-1 bg-[#280652] rounded-lg p-5 text-center cursor-pointer">
                <div className='flex items-center justify-center gap-5 mb-7'>
                  <img className="h-9" src={contract} alt="" />
                  <p className="font-medium">Contract B</p>
                </div>
                <p className="text-sm text-gray-300">Drag & drop files</p>
              </div>
            </div>
            <button className="bg-[#6a1b9a] px-6 py-4 mt-6 rounded-2xl font-medium hover:bg-[#7b1fa2] mx-auto flex">
              Add another contract <img src={plus} alt="plus" className="ml-2" />
            </button>
            <div className="mt-4 flex justify-center">
              <select className="w-100 px-3 py-4 rounded-md bg-[#2e0854] text-white">
                <option>Customize weightage</option>
              </select>
            </div>
          </div>

          {/* Recommendation Panel */}
          <div className="bg-[#2a0f55] p-6 rounded-xl w-[350px] min-w-[350px]">
            <h3 className="text-gray-300">Recommended:</h3>
            <h2 className="text-2xl font-bold mt-1 mb-5">
              Contract B <span className="font-normal text-gray-400">(Advisory)</span>
            </h2>
            <p className="mt-2 text-gray-300">
              Confidence - <span className="font-semibold">86%</span>
            </p>
            <ul className="mt-4 ml-4 space-y-2 list-disc list-inside text-gray-200">
              <li>Clearer payment schedule (Clause 3.2)</li>
              <li>Lower indemnity exposure (Clause 5)</li>
              <li>Explicit 30-day termination notice</li>
            </ul>
          </div>
        </div>

        {/* Contracts Comparison */}
        <div className="flex gap-10 px-28 mt-12 flex-wrap text-black">
          {/* Contract A */}
          <div className="bg-[#BABCDE] px-15 py-6 rounded-xl flex-1 ">
            <h3 className="text-3xl font-semibold">Contract A</h3>
            <div className='flex justify-between'>
              <div className="w-30 h-30 bg-[#BABCDE] border-5 amber-50 rounded-full flex items-center justify-center text-4xl font-medium my-8 ">
              68
            </div>
            <div className="space-y-1 text-lg font-semibold text-[#3A3636] mt-13 pr-18">
              <p className="flex">Clarity: <span className='ml-10'>40%</span></p>
              <p className="flex">Risk: <span className='ml-15'>50%</span></p>
              <p className="flex">Fairness: <span className='ml-6'>46%</span></p>
            </div>
            </div>
            
            <p className="text-sm text-[#3A3636] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-red-400 px-3 py-2 rounded-md text-md font-medium">Unclear payment terms</span>
              <span className="bg-red-400 px-3 py-2 rounded-md text-md font-medium">Broad indemnity</span>
              <span className="bg-red-400 px-3 py-2 rounded-md text-md font-medium">Consider lesser term</span>
            </div>
          </div>

          {/* Contract B */}
          <div className="bg-[#BABCDE] px-15 py-6 rounded-xl flex-1 ">
            <h3 className="text-3xl font-semibold">Contract B</h3>
            <div className='flex justify-between'>
              <div className="w-30 h-30 bg-[#BABCDE] border-5 amber-50 rounded-full flex items-center justify-center text-4xl font-medium my-8 ">
              82
            </div>
            <div className="space-y-1 text-lg font-semibold text-[#3A3636] mt-13 pr-18">
              <p className="flex">Clarity: <span className='ml-10'>80%</span></p>
              <p className="flex">Risk: <span className='ml-15'>80%</span></p>
              <p className="flex">Fairness: <span className='ml-6'>82%</span></p>
            </div>
            </div>
            
            <p className="text-sm text-[#3A3636] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-400 px-3 py-2 rounded-md text-md font-medium">Unclear payment terms</span>
              <span className="bg-blue-400 px-3 py-2 rounded-md text-md font-medium">Broad indemnity</span>
              <span className="bg-blue-400 px-3 py-2 rounded-md text-md font-medium">Consider lesser term</span>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="px-16 mt-15 text-center flex gap-10">
          <p className="mb-3 text-3xl font-bold">Was this analysis helpful?</p>
          <div className="text-yellow-400 text-4xl">
            ★ ★ ★ ★ ☆
          </div>
        </div>

        {/* Footer */}
        <div className="px-16 py-10 mt-12 pb-10 border-t border-gray-700">
          <div className="flex gap-20 text-sm flex-wrap">
            <div>
              <h4 className="font-semibold mb-2">Our Research</h4>
              <ul className="space-y-1">
                <li>Research Index</li>
                <li>Research Overview</li>
                <li>Research Residency</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">API Platform</h4>
              <ul className="space-y-1">
                <li>Platform Overview</li>
                <li>Pricing</li>
                <li>API log in (opens in a new window)</li>
                <li>Documentation (opens in a new window)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Safety</h4>
              <ul className="space-y-1">
                <li>Safety Approach</li>
                <li>Security & Privacy</li>
                <li>Trust & Transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComparativeAnalysis