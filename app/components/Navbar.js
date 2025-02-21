import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='flex w-full border-b items-center'>
            <Image src="/logo.png" width={100} height={40} alt='' className='p-2'/>
            <p className='p-6 text-xl font-bold '>
                老慢语音包
            </p>
        </div>
       
    
    </div>
  )
}

export default Navbar