import { motion } from 'framer-motion'
import ProfilePic from '../assets/images/profile-pic-large.jpg'
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
      <main className='flex flex-col'>
        <section className='mb-[30px] mx-auto mt-[10px]'>
          <motion.div
            initial={{ scaleY: 0, scaleX: 0 }}
            animate={{ scaleY: 1, scaleX: 1 }}
            exit={{ scaleY: 0, scaleX: 0 }}
            className='h-60 w-60 bg-primary rounded-full grid place-content-center overflow-hidden'
          >
            <img
              src={ProfilePic}
              className='mt-10'
              alt='Juan face'
            />
          </motion.div>
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
      </main>
  )
}
