import React, { useEffect, useState } from "react";
import "./Meme.scss";

const Meme = () => {
  let [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState();

  function getMemesImage() {
    let randomMeme = Math.floor(Math.random() * allMeme.length);
    setMeme((prevMemeImage) => {
      return {
        ...prevMemeImage,
        randomImage: allMeme[randomMeme].url,
      };
    });
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMeme(data.data.memes);
    }
    getMemes();
  }, [meme]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return { ...meme, [name]: value };
    });
  }

  return (
    <div className="Meme">
      <div className="form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          id="first-meme"
          placeholder="Top text"
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          id="second-meme"
          placeholder="Bottom text"
        />
        <button onClick={getMemesImage} className="meme-btn">
          create new meme image
        </button>
      </div>
      <div className="meme-box">
        <img src={meme.randomImage} alt="" />
        <h1 className="memetext topText">{meme.topText}</h1>
        <h1 className="memetext bottomText">{meme.bottomText}</h1>
      </div>
    </div>
  );
};

export default Meme;
