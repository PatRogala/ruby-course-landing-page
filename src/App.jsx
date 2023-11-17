
import React from 'react'
import './App.css'
import RubyCanvas from './components/RubyCanvas'

const App = () => {

  return (
    <>
      <div className="headline-container">
        <div id="text-behind">RUBY<br />ON RAILS<br />COURSE</div>
        <div id="text-behind-blur">RUBY<br />ON RAILS<br />COURSE</div>
        <div id="text-front">RUBY<br />ON RAILS<br />COURSE</div>
      </div>

      <div className="canvas-container" style={{width: "100vw", height: "100vh"}}>
        <RubyCanvas />
      </div>


      <div className="overlay">
        <header>
          <p>@patryk_rogala</p>
        </header>
        <footer>
          <h2>2024</h2>
          <ul>
            <li><a href="https://www.instagram.com/patrykrogala.dev/" target="_blank"><img src="./icons/instagram.svg" alt="ig-icon" /></a></li>
            <li><a href="https://www.linkedin.com/in/patrogala/" target="_blank"><img src="./icons/linkedin.svg" alt="ig-icon" /></a></li>
            <li><a href="https://www.youtube.com/@patryk_rogala" target="_blank"><img src="./icons/youtube.svg" alt="ig-icon" /></a></li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default App
