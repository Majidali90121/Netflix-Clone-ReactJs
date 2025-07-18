import { useEffect, useState } from 'react'
import './Grid.css'
export default function Grid({ title, fetchUrl }){
    const [movie,setMovies]=useState([])
    const [index,setIndex]=useState(0)

useEffect(() => {
    fetch(fetchUrl)
    .then(res => res.json())
    .then(data => setMovies(data.results || [])) 
}, [fetchUrl])

    useEffect(()=>{
        const interval=setInterval(()=>{
            setIndex((prev)=>(prev+1)% movie.length)
        },3000)
        return ()=>clearInterval(interval)
    },[movie])

    return(
        <div className="row">
            <h3 className='row-title'>{title}</h3>
            <div className='row-card'> 
                {movie.slice(index,index +6).map((movi,i)=>(
                    <img key={i}  src={`https://image.tmdb.org/t/p/w200${movi.poster_path}`} alt={movi.title} />
                ))}
            </div>
        </div>
    )
}