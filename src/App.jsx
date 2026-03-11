import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CV from './pages/CV'
import Specialty from './pages/Specialty'
import Grade from './pages/Grade'
import WrittenWork from './pages/WrittenWork'
import TeachingAids from './pages/TeachingAids'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cv" element={<CV />} />
          <Route path="specialty" element={<Specialty />} />
          <Route path="grade/:id" element={<Grade />} />
          <Route path="written-work" element={<WrittenWork />} />
          <Route path="teaching-aids" element={<TeachingAids />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
