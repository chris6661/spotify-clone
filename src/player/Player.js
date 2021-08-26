import React from 'react'
import './player.css'; 
import Sidebar from '../sidebar/Sidebar'; 
import Body from '../body/Body'; 
import Footer from "../footer/Footer"; 
function Player() {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
                <Footer />
        </div>
    )
}

export default Player
