import React from 'react'
import { Link } from 'react-router-dom'
import './Genre.css'

function Genre({ genre: { name }, color: { code, bgColor } }) {
    const url = 'https://shazam-core.p.rapidapi.com/v1/charts/genre-world'
    const urlParams = { genre_code: code.toUpperCase(), limit: '20' }
    const host = 'shazam-core.p.rapidapi.com'

    const linkTO = {
        pathname: `${code}/playlist`,
        state: {
            urlParams,
            url,
            host,
        },
    }

    return (
        <Link to={linkTO}>
            <div style={{ backgroundColor: bgColor }} className="genre-wrapper">
                <p className="genre-name">{name}</p>
            </div>
        </Link>
    )
}

export default Genre
