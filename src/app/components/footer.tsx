import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
<div className='bg-blue-300'>      
<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

    <Image 
     src="/aessets/logo.jpg"
       alt="logo Image"
        width={100} 
        height={100}
        className="W-[50px]"
        />
      
      <span className="ml-3 text-xl">Amber Asif</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Amber Asif —
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link
          target='_blank'
         href="https://www.linkedin.com/in/amber-asif/"  
         className = "className= text-gray-500">
      <IoLogoLinkedin className='text-3xl  hover:text-blue-600' />
       </Link>
      
       
      
             
      
     
      
    </span>
  </div>
</footer>

</div> 
  )
}

export default Footer
