import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { EditClient } from './pages/EditClient'
import { Home } from './pages/Home'
import { LandingPage } from './layout/LandingPage'
import { Layout } from './layout/Layout'
import { NewClient } from './pages/NewClient'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/clients' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='new' element={<NewClient />} />
          <Route path='edit/:id' element={<EditClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
