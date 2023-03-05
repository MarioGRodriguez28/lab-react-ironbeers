import './App.css'
import Home from './pages/Home'
import Random from './pages/RandomBeer'
import { Route, Routes } from 'react-router-dom'
import ListBeer from './pages/ListBeer'
import SingleBeer from './pages/SingleBeer'
import Error from './pages/Error'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/beers" element={<ListBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />

        {/* Rutas de error */}

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
