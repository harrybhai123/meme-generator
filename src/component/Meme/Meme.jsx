import React, { useState } from "react";
import "./Meme.scss";
import MemesData from "../Data/MemesData";

const Meme = () => {
  let [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(MemesData)

  function getMemesImage() {
    let memesArray = allMemeImages.data.memes;
    MemesData.data.memes;
    let randomMeme = Math.floor(Math.random() * memesArray.length);
    setMeme(prevMemeImage => {
      return {
        ...prevMemeImage,
        randomImage: memesArray[randomMeme].url
      }
    })
  }

  return (
    <div className="Meme">
      <div className="form">
        <input type="text" name="" id="first-meme" placeholder="Top text" />
        <input type="text" name="" id="second-meme" placeholder="Bottom text" />
        <button onClick={getMemesImage} className="meme-btn">
          create new meme image
        </button>
      </div>
      <img src={meme.randomImage} alt="" />
    </div>
  );
};

export default Meme;
