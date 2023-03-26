import memesData from "../memesData";
import React from "react";

function Meme () {

// const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
const [meme , setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
})

    function getMemeImage () {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length )
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
      }

      function handleChange(event) {
            const {name , value} = event.target
          setMeme(prevMeme => ({
              ...prevMeme,
              [name] : value
          }))
      }

    return(
        <main>
            <div className="form">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                 />
                <input  className="form-input"
                        type="text"
                        placeholder="Bottom text"
                        name={"bottomText"}
                        value={meme.bottomText}
                        onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">Get a New Image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}


export default Meme