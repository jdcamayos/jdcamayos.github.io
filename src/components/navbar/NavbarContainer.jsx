import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function NavbarContainer({
  state,
  handle,
  links,
  navigate,
}) {
  // const linkHandler = to => {
  //   navigate(to)
  //   handle(false)
  // }
  return (
    <motion.nav
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      // dura
      className='z-40 absolute top-0 right-0 overflow-x-hidden overflow-y-hidden'
    >
      <div className='h-screen w-min-60 bg-primary'>
        <div className='h-[60px] border-b border-dark'>
          <button
            className='h-[60px] w-[60px] text-dark'
            onClick={() => handle(false)}
          >
            <i className='bx bx-right-arrow-alt'></i>
          </button>
        </div>
        <div className='text-dark m-3 font-mont'>
          <ul className='flex flex-col space-y-3'>
            {links.map(link => (
              <li key={link.id} className='my-auto'>
                <NavLink
                  to={link.to}
                  onClick={() => handle(false)}
                  className={({ isActive }) =>
                    isActive ? 'font-bold' : ''
                  }
                >
                  <span className='mr-2'>
                    <i className={`bx ${link.icon}`}></i>
                  </span>
                  <span className=''>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
