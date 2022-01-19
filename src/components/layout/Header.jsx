import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Link,
  NavLink,
  useNavigate,
} from 'react-router-dom'
import NavbarContainer from '../navbar/NavbarContainer'

function Header() {
  const navigate = useNavigate()
  const [
    navbarContainerCollapse,
    setNavbarContainerCollapse,
  ] = useState(false)
  const goBackHandler = () => navigate(-1)
  const links = [
    {
      id: 1,
      title: 'Home',
      to: '/',
      icon: 'bx-home',
    },
    {
      id: 2,
      title: 'About me',
      to: '/about-me',
      icon: 'bxs-spreadsheet',
    },
    {
      id: 3,
      title: 'Skills',
      to: '/skills',
      icon: 'bx-wrench',
    },
    {
      id: 4,
      title: 'Portfolio',
      to: '/portfolio',
      icon: 'bx-briefcase-alt',
    },
    {
      id: 5,
      title: 'Contact me',
      to: '/contact-me',
      icon: 'bx-send',
    },
  ]
  return (
    <motion.header
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      className='h-[60px] bg-dark text-light text-[1.8rem] px-3 overflow-x-hidden overflow-y-hidden'
    >
      <div className='flex flex-row justify-between h-full'>
        <div className='self-center h-[60px] w-[60px]'>
          <button
            className='h-[60px] w-[60px]'
            onClick={goBackHandler}
          >
            <i className='bx bx-left-arrow-alt'></i>
          </button>
        </div>
        <div className='self-center'>
          <Link to='/' className='font-hammer'>
            Juan Camayo
          </Link>
        </div>
        <div className='self-center'>
          {/* Button for mobile  */}
          <button
            className='block md:hidden h-[60px] w-[60px]'
            onClick={() => setNavbarContainerCollapse(true)}
          >
            <i className='bx bx-menu-alt-right'></i>
          </button>
          {navbarContainerCollapse && (
            <NavbarContainer
              state={navbarContainerCollapse}
              handle={setNavbarContainerCollapse}
              links={links}
              navigate={navigate}
            />
          )}
          {/* Links for desktop */}
          <div className='hidden md:block'>
            <ul className='flex flex-row space-x-3'>
              {links.map(link => (
                <li key={link.id}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive ? 'text-primary' : ''
                    }
                  >
                    <span className='hidden md:block lg:hidden'>
                      <i className={`bx ${link.icon}`}></i>
                    </span>
                    <span className='hidden lg:block'>
                      {link.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
