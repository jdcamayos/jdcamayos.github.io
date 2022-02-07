import { motion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export default function AboutMe() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About me - Juan Camayo</title>
        </Helmet>
      </HelmetProvider>
      <main className='text-light'>
        <section className='w-80 md:w-2/4 mx-auto'>
        <motion.h1
            initial={{
              scale: 2.5,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            exit={{
              scale: 2.5,
              opacity: 0,
            }}
            className='font-hammer text-5xl text-center mb-10'
          >
            About me
          </motion.h1>
          <motion.p
            initial={{
              translateY: 100,
              opacity: 0,
              animationDelay: 300,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            exit={{
              translateY: 100,
              opacity: 0,
            }}
            className='text-xl font-mont'
          >
            <br />
            I'm a{' '}
            <span className=' text-primary'>
              Javascript
            </span>{' '}
            fullstack developer. <br />I make custom
            applications with the help of the ReactJS
            library and I use Nodejs to create the backend.{' '}
            <br /> I learned to program in 2020, and since
            then I haven't stopped learning new technologies
            and applying them to projects for clients and
            staff.
          </motion.p>
        </section>
      </main>
    </>
  )
}
