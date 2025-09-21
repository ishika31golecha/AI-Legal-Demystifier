import React from "react";
import { useParams, Link } from "react-router-dom";
import templateFiles from "../data/templateFiles";
import NavBar from "../Components/NavBar";

const TemplateList = () => {
  const { categorySlug } = useParams();
  const documents = templateFiles[categorySlug] || [];

  // Helper: Extract file extension
  const getFileType = (fileName) => {
    return fileName.split(".").pop().toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#0B0130]">
      <NavBar />
      <div className="max-w-5xl mx-auto px-5 py-10">
        
        <h1 className="text-3xl font-bold mb-8 capitalize text-white">
          {categorySlug.replace(/[-_]/g, " ")} Templates
        </h1>

        {documents.length === 0 ? (
          <p className="text-gray-400">No documents available for this category.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-5 flex items-center justify-between hover:shadow-2xl transition duration-200"
              >
                {/* Document Name */}
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {doc.name}
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                    {getFileType(doc.file)}
                  </span>
                </h2>

                {/* Download Button */}
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateList;
