import React, { useEffect } from "react"; 
import './App.css';
import Login from "./login/Login";  
import { getTokenFromUrl } from "./spotify"; 
function App() {

  //run code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl(); 
    console.log((token))
  }, []); 

  return (
    <div className="app">
      
      <Login />

    </div>
  );
}

export default App;
