import { useState } from 'react'
import './App.scss'
import Header from './component/Header/Header'
import Meme from './component/Meme/Meme'

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  )
}

export default App
