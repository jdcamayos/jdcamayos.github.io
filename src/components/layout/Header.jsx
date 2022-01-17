import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
    },
    {
      id: 2,
      title: 'About me',
      to: '/about-me',
    },
    {
      id: 3,
      title: 'Skills',
      to: '/skills',
    },
    {
      id: 4,
      title: 'Portfolio',
      to: '/portfolio',
    },
    {
      id: 5,
      title: 'Contact me',
      to: '/contact-me',
    },
  ]
  return (
    <header className='h-[60px] bg-dark text-light text-[1.8rem] px-3'>
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
        <div className='self-center h-[60px] w-[60px]'>
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
                  <Link to={link.to}>
                    <span className='hidden md:block lg:hidden'>
                      <i className='bx bx-equalizer'></i>
                    </span>
                    <span className='hidden lg:block'>
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
