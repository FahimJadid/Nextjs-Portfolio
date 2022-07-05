import React from 'react'
import Image from 'next/image'
import ecommerceImg from '../public/assets/projects/ecommerce.jpg'
import trackernImg from '../public/assets/projects/trackern.jpg'
import ticToeImg from '../public/assets/projects/ticToe.jpg'
import Link from 'next/link'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <menu className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#be0032]'>Projects</p>
        <h2 className='py-4'>What I've worked on </h2>

        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Ecommerce-API' backgroundImg={ecommerceImg} projectUrl='/ecommerceAPI'/>
            <ProjectItem title='Trackern' backgroundImg={ecommerceImg} projectUrl='/trackern'/>
            <ProjectItem title='Tic-Toe' backgroundImg={ecommerceImg} projectUrl='/ticToe'/>
            <ProjectItem title='Ecommerce-API' backgroundImg={ecommerceImg} projectUrl='/ecommerceAPI'/>
        </div>
        </div>
    </menu>
  )
}

export default Projects