import React from 'react'
// import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="welcome-wrapper">
            <div className="welcome-info">
                <div className="welcome-logo">
                    {/* <Link to="/"> */}
                    <img src="/musica-logo.png" alt="musica logo" />
                    {/* </Link> */}
                </div>
                <div className="welcome-about">
                    <div className="welcome-subtitle">
                        <p>Music is the shorthand of emotion</p>
                    </div>
                    <div className="welcome-title">
                        <h3>What&apos;s Your Mood ?</h3>
                    </div>
                </div>
            </div>
            <div className="welcome-vector"></div>
        </div>
    )
}

export default Welcome
