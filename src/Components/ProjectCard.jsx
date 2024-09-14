import React from "react";
import ethereum from "../assets/ethereum.png";

const ProjectCard = () => {
  return (
      <div className="relative w-full">
        <h1 className="text-4xl font-bold">ForestForFuture</h1>
        <div className="flex gap-2 mt-2">
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CORE
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              ECO-114
            </span>
          </div>
          <div className="bg-green-100 px-3 py-1 rounded-3xl">
            <span className="text-xs text-green-600">
              <svg
                className="inline-block w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              SDGs
            </span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-8">
            <div>
              <p className="text-gray-800 text-xl font-bold">ProjectID</p>
              <p className="text-gray-600 text-lg">PUR-175613</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Country</p>
              <p className="text-gray-600 text-lg">Brazil</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Methodology</p>
              <p className="text-gray-600 text-lg">Biochar</p>
            </div>
            
          </div>
        </div>

            <div className="flex absolute top-1 right-[-200px]">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-xl pt-[10px] pl-2">120</span>

            </div>
            <div className="absolute bg-black text-white right-[-200px] bottom-0 w-[150px] h-[50px] rounded-3xl flex items-center justify-center ">
                 <button>
                     Retire
                 </button>
            </div>
      </div>
      
  );
};

export default ProjectCard;
