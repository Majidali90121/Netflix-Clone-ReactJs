import React, { useState } from 'react';

export default function Navbar({ name, onShowAccount }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=9163c50c4bc90c6bfaa703c8ea383a1e&query=${searchTerm}`)
      .then(res => res.json())
      .then(data => setResults(data.results || []));
  };

  return (
    <div>
      <div className="navbar">
      <h1 className='navbar-logo'>Netflix Clone</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div  onClick={onShowAccount}>
        <img className="avatar"
          src={`https://ui-avatars.com/api/?name=${name}&background=random`}
          alt="avatar"
        />
      </div>
      </div>
     <div className="search-results">
  {results.slice(0, 6).map((movie, i) => (
    <div key={i} className="search-result">
      <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
      <span>{movie.title}</span>
    </div>
  ))}
</div>

    </div>
  );
}
