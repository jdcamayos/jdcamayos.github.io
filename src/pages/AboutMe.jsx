import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <motion.main
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      className='bg-dark text-light pt-8 flex justify-center h-[calc(100vh-60px)]'
    >
      <section className='w-80'>
        <h1 className='font-hammer text-5xl text-center mb-10'>
          About me
        </h1>
        <p className='text-xl font-mont'>
          <br />
          I'm a{' '}
          <span className=' text-primary'>
            Javascript
          </span>{' '}
          fullstack developer. <br />I make custom
          applications with the help of the ReactJS library
          and I use Nodejs to create the backend. <br /> I
          learned to program in 2020, and since then I
          haven't stopped learning new technologies and
          applying them to projects for clients and staff.
        </p>
      </section>
      <section className='absolute bottom-0 w-screen '>
        <div className='my-[20px] flex justify-center'>
          <Link
            to='/skills'
            className='btn font-mont text-center bg-primary w-80 text-dark font-semibold'
          >
            Skills
          </Link>
        </div>
      </section>
    </motion.main>
  )
}
