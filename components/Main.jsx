import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
  return (
    <main className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-900'>"I'm <span className='text-[#be0032]'>Jadid</span>"</h1>
                <h2 className='py-2 text-gray-700'>"A former pharmacist who enjoys developing things using code."</h2>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg text-[#be0032] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg text-[#be0032] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                    </div>
                    <div className='rounded-full  shadow-lg text-[#be0032] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg text-[#be0032] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>

                </div>
            </div>
        </div>
    </main>
  )
}

export default Main