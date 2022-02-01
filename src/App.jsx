import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './layout/Layout'
import { NewClient } from './pages/NewClient'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clients' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='new' element={<NewClient />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
