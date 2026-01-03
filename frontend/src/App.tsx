import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { InstrumentList } from './pages/InstrumentList'
import { InstrumentDetail } from './pages/InstrumentDetail'
import { SiloDetail } from './pages/SiloDetail'
import { ChartsReference } from './pages/ChartsReference'
import { Settings } from './pages/Settings'
import { Troubleshooting } from './pages/Troubleshooting'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/instruments" element={<InstrumentList />} />
      <Route path="/instruments/:id" element={<InstrumentDetail />} />
      <Route path="/silos/:id" element={<SiloDetail />} />
      <Route path="/charts" element={<ChartsReference />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/troubleshooting" element={<Troubleshooting />} />
    </Routes>
  )
}

export default App
