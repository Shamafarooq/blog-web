import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex md:w-full sm:w-full w-full h-[60px] pt-4 justify-around mt-4 bg-slate-900'>
        <h1 className='text-white md:text-lg text-sm flex '>Next.JS Version &nbsp;<FaRegCopyright className='md:mt-1 mt-0 text-[22px]'/>&nbsp; Made by Shama Farooq</h1>
        <div className=' md:flex gap-3 text-white md:text-xl sm:text-sm hidden'>
<Link href="https://github.com/Shamafarooq"><FaGithub /></Link>
<Link href="https://www.linkedin.com/in/shama-farooq-a3ba702ba/"><FaLinkedin /></Link>
        </div>
    </div>
  )
}

export default Footer