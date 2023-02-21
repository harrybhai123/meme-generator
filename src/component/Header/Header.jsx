import React from 'react'
import "./Header.scss"
import imgFace from "./TrollFace.png"

const Header = () => {
  return (
    <div className='Header'>
          <div className="heading">
              <img src={imgFace} alt="" />
              <h1>Meme Generator</h1>
      </div>
    </div>
  )
}

export default Header
