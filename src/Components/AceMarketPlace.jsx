import React from 'react';

function AceMarketplace() {
  return (
    <div className="flex items-center">
      <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center mr-4">
        <img src="https://static-00.iconduck.com/assets.00/crown-icon-512x512-23ma7x6s.png" alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">ACE Marketplace</h1>
        <div className="flex items-center mt-2">
          <div className="bg-gray-200 px-4 py-2 rounded-3xl mr-2">BETA</div>
          <div className="text-gray-600">Version</div>
        </div>
      </div>

    </div>
  );
}

export default AceMarketplace;