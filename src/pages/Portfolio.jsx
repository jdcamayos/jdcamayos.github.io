import { useState } from 'react'
import { motion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export default function Portfolio() {
  const slides = [
    {
      id: 1,
      title: 'Billing App',
      description:
        'ElectronJS. ReactJS. React Router. PostgreSQL. Firebird. SOAP. Web Services. Fully interactive WebApp embedded into Electron.js to fetch bills from Firebird database and make the electronic billing process to legalize them.',
      img: 'https://camo.githubusercontent.com/1ab7a597b161f7c97293276d0a52d4071c3ec48b608cdb867a1e5bd9c757436b/687474703a2f2f7777772e63687269737469616e656e6776616c6c2e73652f77702d636f6e74656e742f75706c6f6164732f323031372f31302f456c656374726f6e2d7475746f7269616c2d6170702d6769746875622e706e67',
      github: '',
    },
    {
      id: 2,
      title: 'Medical History Interoperability',
      description:
        'NodeJS. MS SQL Server. PostgreSQL. Webpack. CLI app that extract patients information from MS SQL Server database, adapting data and send to interoperability server.',
      img: 'https://miro.medium.com/max/2000/0*hTjBjk0Jq0EWoHOY',
      github: '',
    },
  ]
  const [carouselState, setCarouselState] = useState(0)
  const incrementSlide = () => {
    return carouselState + 1 <= slides.length - 1
      ? carouselState + 1
      : carouselState + 1 - slides.length
  }
  const decrementState = () => {
    return carouselState - 1 >= 0
      ? carouselState - 1
      : carouselState - 1 + slides.length
  }
  const prevSlide = () => {
    setCarouselState(decrementState())
  }
  const nextSlide = () => {
    setCarouselState(incrementSlide())
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio - Juan Camayo</title>
        </Helmet>
      </HelmetProvider>
      <main className='bg-dark text-light flex flex-col justify-center'>
        <section className='w-80 md:w-2/3 lg:w-3/6 mx-auto flex justify-center'>
          <article
            className='flex items-center'
            onClick={prevSlide}
          >
            <button className='text-4xl'>
              <i className='bx bx-left-arrow-alt' />
            </button>
          </article>
          <article>
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
              Portfolio
            </motion.h1>
            <div className='flex gap-2 p-1 w-full overflow-x-auto snap-proximity snap-x transition-all delay-300 overflow-hidden'>
              {slides.map(
                (project, i) =>
                  i === carouselState && (
                    <div
                      key={project.id}
                      id={`slide-${project.id}`}
                      className={`snap-center shrink-0 overflow-hidden min-h-6 w-[95%] bg-dark `}
                    >
                      <motion.img
                        initial={{ scaleY: 0, scaleX: 0 }}
                        animate={{ scaleY: 1, scaleX: 1 }}
                        exit={{ scaleY: 0, scaleX: 0 }}
                        src={project.img}
                        className='object-cover w-full rounded-2xl '
                        alt={project.name}
                      />
                      <motion.div
                        initial={{
                          translateY: 100,
                          opacity: 0,
                        }}
                        animate={{
                          translateY: 0,
                          opacity: 1,
                        }}
                        exit={{
                          translateY: 100,
                          opacity: 0,
                        }}
                        className='mt-2'
                      >
                        <h3 className='font-hammer font-semibold text-lg text-light'>
                          {project.title}
                        </h3>
                        <p className='font-mont'>
                          {project.description}
                        </p>
                      </motion.div>
                    </div>
                  )
              )}
            </div>
          </article>
          <article className='flex items-center'>
            <button
              className='text-4xl'
              onClick={nextSlide}
            >
              <i className='bx bx-right-arrow-alt' />
            </button>
          </article>
        </section>
      </main>
    </>
  )
}
