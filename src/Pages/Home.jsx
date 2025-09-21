import React, { useRef, useState } from 'react'
import NavBar from '../Components/NavBar'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import chatbot from '../assets/chatbot.svg'
import { Link } from 'react-router-dom'


const Home = () => {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const footerRef = useRef(null);
  const faqRef = useRef(null);
  const uploadRef = useRef(null);
  const templatesRef = useRef(null);

  const handleScroll = (section) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "help" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "faqs" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "upload" && uploadRef.current) {
      uploadRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (section === "templates" && templatesRef.current) {
      templatesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showCases, setShowCases] = useState(false);

  const categories = [
  { name: "Property & Real Estate", slug: "Property_Real_Estate" },
  { name: "Business & Corporate", slug: "business" },
  { name: "Employment & HR", slug: "employment" },
  { name: "Personal & Family", slug: "personal" },
  { name: "Financial & Banking", slug: "financial" },
  { name: "Government & Regulatory", slug: "government" },
  { name: "Intellectual Property (IP)", slug: "ip" },
  { name: "Civil & Criminal Legal Forms", slug: "civil" },
];

  return (
    <>
      <div className='w-screen bg-[#0B0130]'>
        <NavBar onNavigate={handleScroll} />

        {/* Hero Section */}
        <div className="flex items-start justify-center pt-8 px-10">
          <div className="flex-1 ml-16 mt-0">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Upload & Analyse <br />Your Legal Documents
            </h1>
            <p className="text-lg text-white mb-6">
              Intelligent Legal Analysis to Enhance Transparency and Clarity
            </p>

            {/* Drag & Drop Section */}
            <div ref={uploadRef} className="max-w-xl ml-20 mt-20">
              <div className="border border-dashed border-gray-400 rounded-lg p-5 text-center bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm">
                <div className="mb-4">
                  <svg className="mx-auto w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Drag & drop your document here
                </h3>

                <button onClick={() => setShowCases(!showCases)} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors mb-3">
                  Browse Files
                </button>
              </div>
              
            </div>
            
          </div>
          


        {/* Floating Chatbot Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-white hover:bg-[#BABCDE] p-4 rounded-full shadow-lg"
        > 
          <img src={chatbot} alt="chatbot" className="w-6 h-6"/>
          
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
              <div className="p-2 bg-[#431262] text-white rounded-lg self-end max-w-xs">
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
              <button className="ml-2 bg-[#431262] hover:bg-[#333262] text-white px-4 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 flex justify-center">
          <img
            src="/images/home_img1.jpg"
            className="rounded-lg shadow-lg w-[330px] h-[430px] object-cover"
            alt="Legal Document"
          />
        </div>
      </div>
        {showCases && (
            <div className="mt-10 space-y-10 flex align-center justify-center flex-col">
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
        
                  )}
      {/* About Section */}
      <div ref={aboutRef} className='bg-[#431262] h-auto w-full mt-20 py-10 px-10'>
        <h2 className='text-4xl font-bold mb-4 text-white text-center'>About Us</h2>
        <p className="text-white mt-6 max-w-4xl text-center mx-auto">
          At Cypher Cell, we create AI-powered tools that make working with legal documents faster, clearer, and smarter. From analyzing contracts with instant summaries and risk flags, to comparing multiple agreements side by side, to generating tailored contract templates through guided inputs — our platform is designed to simplify complex legal work and support better decision-making. While our tools provide insights and drafting assistance, they are not a substitute for professional legal advice, and we encourage users to consult licensed attorneys for legal matters.
        </p>
      </div>

      {/* Features Section */}
      <div ref={featuresRef}>
        <Features onNavigate={handleScroll} />
      </div>

      {/* Legal Document Templates Section */}
      <div ref={templatesRef} className="mt-16 px-10 mx-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Legal Document Templates
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors cursor-pointer">
            Explore More
          </button>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="cursor-pointer flex space-x-4 min-w-max">

            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/templates/${category.slug}`} // navigate to category page
              >
                <div className="bg-gradient-to-br from-purple-200 to-blue-100 rounded-lg p-4 text-center min-w-[200px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h4 className="text-gray-800 font-semibold mb-2">{category.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="bg-[#1E073A] w-full py-16 px-6 sm:px-20" id="faq">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">

          <div className="bg-white/10 rounded-lg shadow-md p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              What types of documents can I upload?
            </h3>
            <p className="text-gray-200">
              You can upload common legal documents such as contracts, agreements, and NDAs in PDF, DOCX, or TXT formats.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg shadow-md p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Will the tool replace a lawyer?
            </h3>
            <p className="text-gray-200">
              No. Our platform provides intelligent insights and summaries but is not a substitute for professional legal advice.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg shadow-md p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Is my data secure?
            </h3>
            <p className="text-gray-200">
              Yes, we prioritize security and privacy. Your uploaded documents are processed securely and never shared.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg shadow-md p-5">
            <h3 className="text-lg font-semibold text-white mb-2">
              Can I try it for free?
            </h3>
            <p className="text-gray-200">
              Yes, we offer a free trial with limited document analysis before you decide on a paid plan.
            </p>
          </div>

        </div>
      </div>

      {/* Footer (Help Section) */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div > 
    </> 
  ) 
}

export default Home