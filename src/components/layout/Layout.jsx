import Header from './Header'

function Layout({ children }) {
  return (
    <div className='bg-dark overflow-x-hidden overflow-y-hidden'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
