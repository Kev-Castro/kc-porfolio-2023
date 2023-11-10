import { Routes, Route } from 'react-router-dom'

import Header from './compotents/Header'

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './compotents/Footer'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
