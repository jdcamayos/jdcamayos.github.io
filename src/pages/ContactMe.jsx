import { motion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'

export default function ContactMe() {
  const wayContact = [
    {
      id: 1,
      title: 'Email',
      icon: 'bxl-gmail',
      to: 'mailto:jd.camayo@gmail.com?Subject=Contact%20me%20from%20webpage',
    },
    {
      id: 2,
      title: 'Telegram',
      icon: 'bxl-telegram',
      to: 'https://t.me/jdcamayos',
    },
    {
      id: 3,
      title: 'WhatsApp',
      icon: 'bxl-whatsapp',
      to: 'https://wa.me/+573184853359',
    },
    {
      id: 4,
      title: 'Phone',
      icon: 'bxs-phone',
      to: 'tel+573184853359',
    },
  ]
  const handlerExternalLink = link => {
    window.open(link, '_blank')
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact me - Juan Camayo</title>
        </Helmet>
      </HelmetProvider>
      <main className='bg-dark text-light flex justify-center'>
        <section className='w-80'>
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
            Contact me
          </motion.h1>
          <div className='flex flex-col space-y-6 justify-center'>
            {wayContact.map((item, i) => (
              <motion.button
                initial={{
                  translateX: 100,
                  opacity: 0,
                }}
                animate={{
                  translateX: 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.3 + i * 0.3 }}
                exit={{
                  translateX: 100,
                  opacity: 0,
                }}
                key={item.id}
                className='btn bg-primary text-dark flex flex-row justify-between px-10'
                onClick={() => handlerExternalLink(item.to)}
              >
                <span className='font-semibold self-center'>
                  {item.title}
                </span>
                <span className='text-2xl self-center'>
                  <i className={`bx ${item.icon}`}></i>
                </span>
              </motion.button>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
