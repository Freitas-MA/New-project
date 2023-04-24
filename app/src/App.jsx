// import './App.css';
// import { useEffect } from 'react'; 
// import React from 'react';
// import SearchIcon from './search.svg';
// import MovieCard from './components/MovieCard';
// //646993ce

// const API_URL = 'https://www.omdbapi.com/?apikey=646993ce';



// const App = () => {
//   const [movies, setMovies] = React.useState([]);
  
//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//       const data = await response.json();
//       setMovies(data.Search);
//   }
//   useEffect(() => {
//     searchMovies('null');
//   }, [])
  
//   return (
//     <div className="app">
//       <header className="App-header">
//         <h1>Were to watch?</h1>
//         <form className='search'>
//           <input 
//           type="text" 
//           placeholder="Search for a movie"
//           value={searchMovies}
//           onChange={(e) => searchMovies(e.target.value)}
//           />
//           <img src={SearchIcon} alt="search" 
//           onClick={(e) => searchMovies(e.target.value)}/>
          
//         </form>
//       </header>
//       {
//         movies?.length > 0 ? (
//           <div className="container">
//            {movies.map((movie) => (
//               <MovieCard movie={movie} />
//            ))}
//           </div>
//         ) : (
//           <div className="empty">
//             <h2>No movies found</h2>
//           </div>
//         )
//       }
//       </div>
//   )};

// export default App;




import React, { useState, useEffect } from "react";

import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;