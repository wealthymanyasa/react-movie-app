import {useEffect, useState} from 'react';

import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

//bfa00720
const API_URL = 'https://www.omdbapi.com/?apikey=bfa00720';

const App = () => {
  const [movies, setMovies] = useState([]);

  //function to search for movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const movies = await response.json();

    setMovies(movies.Search);

  }

  useEffect(() => { 
      searchMovies('Spiderman');
  },[]);

  return (
     <div className="app">
      <h1>Movie Planet</h1>
      <div className="search">
        <input 
        placeholder='Search for a movies'
        value="Superman"
        onchange={()=> {}}
        />
        <img 
        src={SearchIcon}
        alt="Search"
        onClick={()=> {}}
        />
      </div>
      {
        movies?.length > 0 
        ?(
          <div className='container'>
                  
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
         </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
     </div>
  );
}

export default App;
