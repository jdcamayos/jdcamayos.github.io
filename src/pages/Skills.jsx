import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Skills() {
  const [skillSelected, setSkillSelected] =
    useState('frontend')
  const mySkills = {
    frontend: {
      title: 'Frontend',
      prev: 'cloud',
      post: 'backend',
      list: [
        {
          id: 1,
          title: 'Javascript ES6 +',
          icon: 'bxl-javascript',
          range: 5,
        },
        {
          id: 2,
          title: 'HTML',
          icon: 'bxl-html5',
          range: 5,
        },
        {
          id: 3,
          title: 'CSS',
          icon: 'bxl-css3',
          range: 5,
        },
        {
          id: 4,
          title: 'ReactJS',
          icon: 'bxl-react',
          range: 5,
        },
        {
          id: 5,
          title: 'Tailwindcss',
          icon: 'bxl-tailwind-css',
          range: 5,
        },
        {
          id: 6,
          title: 'Bootstrap',
          icon: 'bxl-bootstrap',
          range: 5,
        },
      ],
    },
    backend: {
      title: 'Backend',
      prev: 'frontend',
      post: 'design',
      list: [
        {
          id: 1,
          title: 'NodeJS',
          icon: 'bxl-nodejs',
          range: 5,
        },
        {
          id: 2,
          title: 'ExpressJS',
          icon: 'bx-error',
          range: 5,
        },
        {
          id: 3,
          title: 'SQL',
          icon: 'bxs-data',
          range: 5,
        },
        {
          id: 4,
          title: 'NoSQL',
          icon: 'bxs-data',
          range: 5,
        },
      ],
    },
    design: {
      title: 'Design',
      prev: 'backend',
      post: 'cloud',
      list: [
        {
          id: 1,
          title: 'Figma',
          icon: 'bxl-figma',
          range: 5,
        },
      ],
    },
    cloud: {
      title: 'Cloud',
      prev: 'design',
      post: 'frontend',
      list: [
        {
          id: 1,
          title: 'AWS',
          icon: 'bxl-aws',
          range: 5,
        },
        {
          id: 2,
          title: 'Azure',
          icon: 'bxl-microsoft',
          range: 5,
        },
        {
          id: 3,
          title: 'Heroku',
          icon: 'bxl-heroku',
          range: 5,
        },
      ],
    },
  }
  return (
    <main className='bg-dark text-light flex flex-col justify-center'>
      <section className='w-80 mx-auto'>
        <h1 className='font-hammer text-5xl text-center mb-10'>
          Skills
        </h1>
        <div className='font-mont border-2 border-light rounded-lg'>
          <div className='text-center text-light text-2xl font-semibold'>
            <button
              className='w-full border-b-2 border-light py-3'
              onClick={() =>
                setSkillSelected(
                  mySkills[skillSelected]['prev']
                )
              }
            >
              {
                mySkills[mySkills[skillSelected]['prev']][
                  'title'
                ]
              }
              <span className='ml-4'>
                <i className='bx bx-up-arrow-alt' />
              </span>
            </button>
          </div>
          <div className='text-light'>
            <h2 className='font-bold text-center text-2xl text-primary pt-3'>
              {mySkills[skillSelected]['title']}
            </h2>
            <motion.ul
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
              className='px-4 py-2'
            >
              {mySkills[skillSelected]['list'].map(item => (
                <li
                  key={item.id}
                  className='self-center text-xl my-2'
                >
                  <i className={`bx ${item.icon} mr-2`} />
                  <span>{item.title}</span>
                </li>
              ))}
            </motion.ul>
          </div>
          <div className='text-center text-light text-2xl font-semibold'>
            <button
              className='w-full border-t-2 border-light py-3'
              onClick={() =>
                setSkillSelected(
                  mySkills[skillSelected]['post']
                )
              }
            >
              {
                mySkills[mySkills[skillSelected]['post']][
                  'title'
                ]
              }
              <span className='ml-4'>
                <i className='bx bx-down-arrow-alt' />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
