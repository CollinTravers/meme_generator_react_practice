import React from "react";

import './Meme.css';

function Meme () {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleOnMouseOver() {
    console.log("There was a mouse that went over!")
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text" onChange={handleChange} name="topText" value={meme.topText}/>
        <input className="form--input" type="text" placeholder="Bottom Text" onChange={handleChange} name="bottomText" value={meme.bottomText}/>
        <button onMouseOver={handleOnMouseOver} onClick={getMemeImage} className="form--button">Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image"></img>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme;