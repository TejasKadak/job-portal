import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 mb-1'>
      <img className='h-10 w-auto max-w-full rounded-xl object-contain' src={assets.logo} alt="" />
<p className="flex-1 pl-4 py-2 text-sm text-gray-600 hidden sm:block">
 © tejas.dev | All rights reserved
</p>

      <div className='flex gap-2'>
        <img width={38} src={assets.facebook_icon} alt="" />
        <img width={38} src={assets.twitter_icon} alt="" />
        <img width={38} src={assets.instagram_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer
