import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Laws from './pages/Laws'
import LawDetail from './pages/LawDetail'
import Notes from './pages/Notes'
import Comparison from './pages/Comparison'
import ExportPage from './pages/Export'

export default function App() {
  return (
    <BrowserRouter>
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
