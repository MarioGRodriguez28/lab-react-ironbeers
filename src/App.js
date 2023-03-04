import './App.css'
import Home from './pages/Home'
import Random from './pages/RandomBeer'
import { Route, Routes } from 'react-router-dom';
import ListBeer from './pages/ListBeer';
import Error from './pages/Error';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/random-beer" element={<Random/>} />
        <Route path="/beers" element={<ListBeer/>} />
        <Route path= "/beers/:id" element={<SingleBeer/>}/>

{/* Rutas de error */}

<Route path="/error" element={ <Error /> }/>
      </Routes>
    </div>
  )
}

export default App
