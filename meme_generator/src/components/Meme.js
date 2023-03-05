import React from "react";
import memesData from "../memesData";
import './Meme.css';

function Meme () {

  //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  console.log("CHANGE")
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
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