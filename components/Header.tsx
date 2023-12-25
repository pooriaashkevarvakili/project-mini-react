import React from 'react';
import Link from 'next/link';
export default function Header(){
    return(
        <div className='flex px-16 justify-between'>
        <div className='flex items-center'>
            <img className='w-16 h-16' src='/images/favicon.png'/>
            <span>mediaplus</span>
        </div>
        <div>
            <Link href="/About" className=' p-3 h-10 bg-blue-400 text-white rounded-xl'>about</Link>
        </div>
        </div>
    )
}