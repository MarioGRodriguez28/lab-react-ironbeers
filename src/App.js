import './App.css'
import Home from './pages/Home'
import Random from './pages/RandomBeer'
import { Route, Routes } from 'react-router-dom';
import ListBeer from './pages/ListBeer';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/random-beer" element={<Random/>} />
        <Route path="/beers" element={<ListBeer/>} />
      </Routes>
    </div>
  )
}

export default App
