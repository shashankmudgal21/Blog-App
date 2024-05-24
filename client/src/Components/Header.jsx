import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path= useLocation().pathname
  return (
    <div>
      <Navbar className='border-b-2'>
        <Link to = '/' className='font-semibold self-center text-sm sm:text-xl whitespace-nowrap dark:text-white'>
            <span className=' text-white px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>Shashank's</span>
            Blog
        </Link>
        <form>
            <TextInput
            type='text'
            placeholder='Search..'
            rightIcon={CiSearch }
            className='hidden lg:inline'
            />
            
        </form>
        <Button className='w-12 h-10 lg:hidden' color={'gray'} pill><CiSearch/></Button>
        <div className='flex gap-2 order-2'>
        <Button className='w-12 h-10' color={'gray'} pill><FaMoon /></Button>
        <Link to={'/sign-in'}>
        <Button gradientDuoTone={'purpleToBlue'} color={'gray'} outline>Sign In</Button>
        </Link>
        </div>
        <Navbar.Collapse>
          <Navbar.Link active = {path === '/'} as={'div'}>
            <Link to = "/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active = {path === '/about'} as={'div'} >
          <Link to = "/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active = {path === '/projects'} as={'div'}>
          <Link to = "/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Toggle></Navbar.Toggle>
      </Navbar>
    </div>
  )
}