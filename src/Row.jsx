import { useEffect, useState } from 'react'
import './Row.css'

export default function Row({title,fetchUrl}){
    const [movies,setMovies]=useState([]);

useEffect(() => {
    fetch(fetchUrl)
    .then(res => res.json())
    .then(data => setMovies(data.results || [])) 
}, [fetchUrl])

    return(
        <div className="row">
            <h3 className='row-title'>{title}</h3>
            <div className="row-grid">
                {movies.slice(0, 90).map((movie, i) => {
    return (
        <img key={i} className='row-poster' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
    )
})}

            </div>
        </div>
    )
}