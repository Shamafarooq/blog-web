import React from 'react'
import Link from 'next/link'
import { MdMenu } from "react-icons/md";
import { ModeToggle } from './mpoon'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
const Navbar = () => {
  return (
    <div className='flex md:w-full sm:w-full w-full justify-around mt-4 bg-slate-900'>
        <div>
<h2 className='text-[50px] md:text-[40px] sm:text-[60px] font-serif font-bold text-white mt-3'>Next.JS</h2>
        </div>
        <div>
            <ul className='hidden md:flex gap-6 pt-5'>
                <li className='text-lg font-normal  text-white' ><Link href="/">Home</Link></li>
                <li className='text-lg font-normal  text-white' ><Link href="/about">About</Link></li>
                <li className='text-lg font-normal  text-white' ><Link href="/blog">Blog</Link></li>
            </ul>
            <Sheet>
              <SheetTrigger className='md:hidden sm:ml-80 sm:mt-1'>
              <button className='bg-white sm:ml-[10%] text-black text-4xl my-9 rounded-lg'><MdMenu /></button>
              </SheetTrigger>
              <SheetContent>
              <ul className='flex flex-col gap-6 pt-5 bg-white '>
                <li className='text-2xl font-normal  text-black' ><Link href="/">Home</Link></li>
                <li className='text-2xl font-normal  text-black' ><Link href="/about">About</Link></li>
                <li className='text-2xl font-normal  text-black' ><Link href="/blog">Blog</Link></li>
            </ul>
              </SheetContent>
            </Sheet>
        </div>
        <div className='hidden sm:flex md:flex gap-4'>
            <button className='border-1 sm:hiddden md:block hidden  border-white font-normal  text-white p-2 text-lg pt-5'>Contact Us</button>
            <ModeToggle/>
        </div>
       
    </div>
    
  )
}

export default Navbar