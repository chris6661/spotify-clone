import { WindowsToaster } from "node-notifier";
import React, { useEffect, useState } from "react"; 
import './App.css';
import Login from "./login/Login";  
import { getTokenFromUrl } from "./spotify"; 
function App() {

  const [token, setToken] = useState(null); 
  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); 
    window.location.hash = ""; 
    const _token = hash.access_token; 

    if(_token) {
      //if there is a token, set token to be token 
      setToken(_token)
    }

    console.log("HERE IS YOUR TOKEN", token)
  }, []); 

  return (
    <div className="app">
      {
        //if there is a token, will show logged in page.player, if not token then will go to login page
        token ? (
          <h1>logged innnn</h1>
        ) : (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
