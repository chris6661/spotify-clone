import React, { useEffect, useState } from "react"; 
import './App.css';
import Login from "./login/Login";  
import Player from "./player/Player"; 
import { getTokenFromUrl } from "./spotify"; 
import SpotifyWebApi from "spotify-web-api-js"; 

const spotify = new SpotifyWebApi(); 
function App() {

  const [token, setToken] = useState(null); 
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); 
    window.location.hash = ""; 
    const _token = hash.access_token; 

    //use an underscore to use multiple variables with same name, in this case token 
    if(_token) {
      //if there is a token, set token to be token 
      setToken(_token)

      spotify.setAccessToken(_token); 

      spotify.getMe().then((user) => {
        console.log(user)
      })
    }

    console.log("HERE IS YOUR TOKEN", token)
  }, []); 

  return (
    <div className="app">
      {
        //if there is a token, will show logged in page.player, if not token then will go to login page
        token ?
        <Player />
         : <Login /> }
      

    </div>
  );
}

export default App;
