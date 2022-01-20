import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className='bg-dark overflow-x-hidden min-h-screen'>
      <Header />
      <div className='min-h-[calc(100vh-120px)]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
