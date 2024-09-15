import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import ethereum from '../assets/ethereum.png';



const ProjectVerification = () => {
  const [projectId, setProjectId] = useState('');

  const handleProjectIdChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleVerify = () => {
    // Implement verification logic here
    console.log('Verifying Project ID:', projectId);
  };

  const handleContinue = () => {
    // Implement continue logic here
    console.log('Continuing with Project ID:', projectId);
  };

  return (
    <>
 <div className='relative rounded-3xl bg-white mt-10 shadow'>

    <div className="mt-12 pt-8 px-4">
          <div className="flex gap-8">
            <div>
              <p className="text-gray-800 text-xl font-bold">Available Token</p>
              <p className="text-gray-600 text-lg">90/100</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Vintage</p>
              <p className="text-gray-600 text-lg">2024</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Country</p>
              <p className="text-gray-600 text-lg">Brazil</p>
            </div>
            <div>
              <p className="text-gray-800 text-xl font-bold">Environmental Effect</p>
              <p className="text-gray-600 text-lg">1000</p>
            </div>
            
          </div>
        </div>

            <div className="flex absolute right-[50px] top-8 ">
                <div className="bg-gray-100 border rounded-full flex items-center justify-center w-12 h-12">
                <span><img src={ethereum} alt="" className="h-10 w-9 " /></span>

                </div>
                <span className="text-bold text-black text-xl pt-[10px] pl-2">120</span>

                  <p className='text-black absolute top-12 ml-9'>Price</p>
            </div>

                     


    <div className=' border-b-2 pt-6 mx-6'></div>
    <div className="container mx-auto w-[800px] p-8">
     
      <div className=" p-6 w-[800px] ">
        <label htmlFor="projectId" className="text-lg font-semibold text-black">Enter the ProjectID ?</label>
        <br />
        <input
          type="text"
          id="projectId"
          value={projectId}
          onChange={handleProjectIdChange}
          className="w-[670px] h-[60px] px-4 bg-gray-200 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder='ProjectID'
        />
      </div>
      <div className="mt-6  gap-4 flex items-center justify-center">
        <button
          onClick={handleVerify}
          className="px-6 py-3 w-[200px] rounded-2xl bg-[#D3FFCA] text-black font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Verify
        </button>
        <button
          onClick={handleContinue}
          className="px-6 py-3 w-[200px] rounded-2xl bg-[#303139] text-white font-semibold  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Continue
        </button>
      </div>
    </div>
    </div>
    </>

  );
};

export default ProjectVerification;
