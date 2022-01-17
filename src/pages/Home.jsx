import { Link } from 'react-router-dom'

export default function Home() {
  const socialLinks = [
    {
      id: 1,
      title: 'Instagram',
      to: 'https://instagram.com/jdcamayos',
      icon: 'bxl-instagram',
    },
    {
      id: 2,
      title: 'Twitter',
      to: 'https://twitter.com/jdcamayos',
      icon: 'bxl-twitter',
    },
    {
      id: 3,
      title: 'LinkedIn',
      to: 'https://linkedin.com/in/jdcamayos',
      icon: 'bxl-linkedin',
    },
  ]
  const handleExternalLink = link => {
    window.open(link, '_blank')
  }
  return (
    <main className='bg-dark text-light grid place-content-center h-[calc(100vh-60px)]'>
      <section className='mb-[50px] mx-auto'>
        <div className='h-60 w-60 bg-primary rounded-full grid place-content-center'>
          <span className='text-dark'>A profile pic</span>
        </div>
      </section>
      <section className='text-center text-primary'>
        <span className='text-6xl'>
          <i className='bx bxl-javascript'></i>
        </span>
        <p className='font-hammer text-[1.5rem]'>
          Javascript Fullstack <br /> Developer
        </p>
        <div className='mt-6'>
          <ul className='flex flex-row space-x-5 justify-center'>
            {socialLinks.map(link => (
              <li key={link.id}>
                <button
                  className='text-4xl'
                  onClick={() =>
                    handleExternalLink(link.to)
                  }
                >
                  <i className={`bx ${link.icon}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='absolute bottom-0 w-screen '>
        <div className='my-[20px] flex justify-center'>
          <Link
            to='/about-me'
            className='btn text-center bg-primary w-80 text-dark font-semibold'
          >
            About me
          </Link>
        </div>
      </section>
    </main>
  )
}
