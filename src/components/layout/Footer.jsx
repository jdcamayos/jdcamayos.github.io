import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
  const FOOTER_LOGIC = {
    '/': {
      title: 'Home',
      next: '/about-me',
    },
    '/about-me': {
      title: 'About Me',
      next: '/skills',
    },
    '/skills': {
      title: 'Skills',
      next: '/portfolio',
    },
    '/portfolio': {
      title: 'Portfolio',
      next: '/contact-me',
    },
    '/contact-me': {
      title: 'Contact me',
      next: '/',
    },
  }
  const { pathname } = useLocation()

  return (
    <footer className='min-h-[60px]'>
      {FOOTER_LOGIC[pathname] && (
        <div className='my-[10px] flex justify-center'>
          <Link
            to={FOOTER_LOGIC[pathname]['next']}
            className='btn font-mont text-center bg-primary w-80 text-dark font-semibold'
          >
            {
              FOOTER_LOGIC[FOOTER_LOGIC[pathname]['next']][
                'title'
              ]
            }
          </Link>
        </div>
      )}
    </footer>
  )
}
