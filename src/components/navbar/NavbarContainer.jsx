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
    <nav className='z-40 absolute top-0 right-0'>
      <div className='h-screen w-60 bg-primary'>
        <div className='h-[60px] border-b border-dark'>
          <button
            className='h-[60px] w-[60px] text-dark'
            onClick={() => handle(false)}
          >
            <i className='bx bx-right-arrow-alt'></i>
          </button>
        </div>
        <div className='text-dark m-3'>
          <ul className='flex flex-col space-y-3'>
            {links.map(link => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  onClick={() => handle(false)}
                  className={({ isActive }) =>
                    isActive ? 'font-bold' : ''
                  }
                >
                  <span className=''>
                    <i className='bx bx-equalizer'></i>
                  </span>
                  <span className=''>{link.title}</span>
                </NavLink>
              </li>
            ))}
            {/* <li>
              <span className=''>
                <i className='bx bx-equalizer'></i>
              </span>
              <span className=''>Home</span>
            </li>
            <li>
              <span className=''>
                <i className='bx bx-equalizer'></i>
              </span>
              <span className=''>Home</span>
            </li>
            <li>
              <span className=''>
                <i className='bx bx-equalizer'></i>
              </span>
              <span className=''>Home</span>
            </li>
            <li>
              <span className=''>
                <i className='bx bx-equalizer'></i>
              </span>
              <span className=''>Home</span>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
