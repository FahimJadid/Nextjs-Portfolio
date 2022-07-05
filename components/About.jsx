import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <main className='w-full md:h-screen p-2 flex items-center py-16'>
      <section className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#be0032]'>About</p>
            <h2 className='py-4'>My Background</h2>
            <p className='py-2 text-gray-900'>The moment my first python program printed "Hello World" on the terminal, I knew I was hooked on the world of software creation. Software development, on the other hand, has never been solely a job for me. It has been a rewarding endeavor to constantly grow and enhance my abilities in the development of high-quality software. What appeared to be a simple "Hello World" has suddenly blossomed into a full-fledged obsession that appears to be growing more fascinating as the years pass.
            </p>
            <p className='py-2 text-gray-900 underline cursor-pointer'>Check out some of my blogs</p>

        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image className='rounded-xl' src="/assets/profile.jpg" alt="profile" width='1080' height='1080'/>
        </div>
      </section>
    </main>
  )
}

export default About
