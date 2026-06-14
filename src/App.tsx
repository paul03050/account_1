import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Laws from './pages/Laws'
import LawDetail from './pages/LawDetail'
import Notes from './pages/Notes'
import Comparison from './pages/Comparison'
import ExportPage from './pages/Export'

function NavigateBack() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      navigate(redirect, { replace: true })
    }
  }, [navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavigateBack />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/laws/:id" element={<LawDetail />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/export" element={<ExportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
