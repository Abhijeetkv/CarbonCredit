import React from 'react'
import { motion } from 'framer-motion'
import global from '../assets/global.png'
import stamp from '../assets/stamp.png'
import ethereum from '../assets/ethereum.png'

function ProductCard() {
  return (
    <>
     <div className='pt-1 mt-3 bg-white w-[270px] rounded-2xl  h-[300px] shadow-xl'>
    <div className=" rounded-2xl  m-2  overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          src="https://miro.medium.com/v2/resize:fit:1068/1*AnJVs8A8r7eEgWKiTMqtoA.jpeg"
          className="w-full h-auto object-cover rounded-2xl"
        />
        
      </div>
      <div className="p-4">
        <span className="flex space-x-3  top-0 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black  tracking-[-0.32px] leading-[normal]">
          <span>
          <img src={global} alt="" className='w-[25px] h-[25px]' />
          </span>
          <span className='text-sm pt-1 pr-4'> WGMintefaces #983</span>
          <span>
            <img src={stamp} alt="" className='w-[25px]' />
          </span>
        </span>

        <div class="border border-t-gray-900  mt-7"></div>
        
        <div className="pt-3">
        <span className="flex space-x-2  bottom-2 left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black  tracking-[-0.32px] leading-[normal]">
          <span>
          <img src={ethereum} alt="" className='w-[25px] h-[25px]' />
          </span>
          <span className='text-sm pt-1 pr-6 text-gray-700'> <b>2</b> Ethereum</span>
          <span className="text-gray-700 pt-1 text-sm"><b>9/10</b> Rating</span>
          </span>
        </div>
        
      </div>
    </div>
    </div>

    </>
  )
}

export default ProductCard