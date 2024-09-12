import React from 'react'
import ManageNfts from '../Components/ManageNft'
import AceMarketplace from '../Components/AceMarketPlace'
import Menu from '../Components/Menu'

function heroSection() {
  return (
    <>
    <div className='relative'>
      <div>
      <ManageNfts />
      </div>
      <div className='absolute top-5 left-5'>
        <AceMarketplace />
        <Menu />
      </div>
    </div>
    </>
  )
}

export default heroSection