import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from "./components/Header"
import Home from "./pages/Home"
import WebDev from "./pages/WebDev"
import Games from "./pages/Games"
import Game from "./pages/Game"
import VisualArts from "./pages/VisualArts"
import ArtCategory from "./pages/ArtCategory"
import Crochet from "./pages/Crochet"
import CrochetCategory from "./pages/CrochetCategory"
import About from "./pages/About"

function App() {
  return (
    <>
      <BrowserRouter basename="/ciarafeng">
        <Header />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-dev" element={<WebDev />} />
            <Route path="/games" element={<Games />} />
              <Route path="/games/:game" element={<Game />} />
            <Route path="/visual-arts" element={<VisualArts />} />
              <Route path="/visual-arts/:category" element={<ArtCategory />} />
            <Route path="/crochet" element={<Crochet />} />
              <Route path="/crochet/:category" element={<CrochetCategory />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
