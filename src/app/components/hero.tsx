import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    
     <section className="text-gray-600 body-font bg-slate-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
       <p  data-aos="flip-left"> I am </p>
        <p data-aos="flip-right" className='mt-2 font-semibold'>Web Dewelper</p>
       </h1>
      
      <p className="mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure consectetur, commodi quaerat saepe, non
         perferendis eius tempore sed obcaecati totam, fugiat omnis iusto deleniti. Veritatis sed tempore 
        veniam iste?
      </p>
      <div className="flex justify-center">
        <Link href="#Contact">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        src="/aessets/pic.jpg"
        width={500}
        height={500}
      />
    </div>
  </div>
</section>


    
  )
}

export default Hero
