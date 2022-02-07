import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Not found - Juan Camayo</title>
        </Helmet>
      </HelmetProvider>
      <main className='bg-dark text-light pt-8 grid place-content-center h-[calc(100vh-60px)]'>
        <section className='text-center '>
          <h1 className='font-hammer text-8xl'>404</h1>
          <h2 className='font-mont text-xl'>
            Sorry, page not found
          </h2>
          <p className='mt-5 font-mont text-lg'>
            Go to{' '}
            <Link
              to='/'
              className='font-semibold underline'
            >
              Home
            </Link>
          </p>
        </section>
      </main>
    </>
  )
}
