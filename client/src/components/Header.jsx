/* eslint-disable no-undef */
import { Avatar, Button, Dropdown, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
function Header() {
    const path = useLocation().pathname;

  return (
   <Navbar className='border-b-2'>
     <Link to={'/'} className='py-1 border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-4 text-white text-bold text-2xl'>
        <span >Friends</span>
     </Link>
     <form>
        <TextInput
          type='text'
          placeholder='Search...'
          className='hidden lg:inline'
        />
     </form>
     <Button  className='w-12 h-10 lg:hidden ml-[170px]' color='gray' pill>
        <AiOutlineSearch/>
     </Button>
   
     <NavbarToggle/>
     <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/profile'} as={'div'}>
          <Link to='/profile'>Profile</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/sign-in'} as={'div'}>
          <Link to='/sign-in'>SignIn</Link>
        </Navbar.Link>
      </Navbar.Collapse>
   </Navbar>
  )
}

export default Header
