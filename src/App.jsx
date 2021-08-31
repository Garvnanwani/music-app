import React from 'react'
import './App.css'
import Welcome from './components/Welcome'
import { Genre } from './components/Welcome'
import { BrowserRouter as Router } from 'react-router-dom'
import genreCat from './genreCat'
import Display from './pages/display/Display'

function App() {
    return (
        <div className="App">
            <Router>
                <Welcome />
                <Display />
            </Router>
        </div>
    )
}

export default App
