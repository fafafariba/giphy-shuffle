import React, { useState } from "react";
import "./App.css";

function App() {
  const name = "Lizzo";
  const API_KEY = "aHi5kZ49h4esZTalKqyvkBO2llvuHeJr";
  const GIPHY_API_URL = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=funny`;

  const [imageUrl, setImageUrl] = useState(
    "https://media.giphy.com/media/3gVFmYNIY3A2LroFBD/giphy.gif"
  );

  function fetchImage() {
    fetch(GIPHY_API_URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        const newImageUrl = myJson.data.images.original.url;

        setImageUrl(newImageUrl);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}'s page!</h1>
        <img src={imageUrl} className="App-logo" alt="logo" />
        <p>This page was created by {name}!</p>
        <button onClick={fetchImage}>Shuffle!</button>
      </header>
    </div>
  );
}

export default App;
