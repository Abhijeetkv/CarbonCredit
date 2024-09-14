import React from 'react'

function TransactionActivity() {
  return (
    <>
    <div className='bg-gray-100 p-4 mt-5 rounded-2xl pb-4'>
        <h1 className=' text-black text-7xl'>Transaction Activity</h1>
        <div className="bg-white h-[250px] mt-3 rounded-3xl">
            <p className='p-8 text-3xl'>Carbon Limits</p>
            <div className="flex h-auto px-4">
                <div className="bg-[#146144]
                    h-[50px] w-[427px] rounded-2xl ml-1 "></div>
                <div className="bg-[#D3FFCA] h-[50px] w-[192px] rounded-2xl ml-1 "></div>
                <div className="bg-[#D3FFCA] h-[50px] w-[192px] rounded-2xl ml-[120px] "></div>
                <div className="bg-gray-200 h-[50px] w-[427px] rounded-2xl ml-1 "></div>
                </div>
                <div className="flex">
                <p className='px-6 py-4 text-lg '>Credit Limits</p>
                <p className='px-6 py-4 text-lg ml-[190px]'><b>7189 / </b>10000</p>
                <p className='px-6 py-4 text-lg ml-[110px]'>Offset Available </p>
                <p className='px-6 py-4 text-lg ml-[160px]'><b>7189 / </b>10000</p>

                </div>                

        </div>

    </div>
    </>
  )
}

export default TransactionActivity