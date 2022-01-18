import Header from './Header'

function Layout({ children }) {
  return (
    <div className='bg-dark'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
