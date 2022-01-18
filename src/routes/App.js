import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout/Layout'
import AboutMe from '../pages/AboutMe'
import ContactMe from '../pages/ContactMe'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Portfolio from '../pages/Portfolio'
import Skills from '../pages/Skills'

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/skills' element={<Skills />} />
            <Route
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route
              path='/contact-me'
              element={<ContactMe />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  )
}

export default App
