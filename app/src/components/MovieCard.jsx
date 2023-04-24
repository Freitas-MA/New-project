// import React from 'react';

// const movie = {
//   "Title": "",
//   "Year": "",
//   "imdbID": "",
//   "Type": "",
//   "Poster": ""
// }


// const MovieCard = ({ movie: {imdbID, Year, Poster, Title, Type} }) => {
//     <div className="movie">
//           <div>
//             <p>
//                 {movie.Year}
//             </p>
//           </div>
//           <div>
//             <img src={movie.Poster} alt="Poster" />
//           </div>
//           <div>
//             <p>
//                 {movie.Type}
//             </p>
//           </div>
//           <div>
//             <p>
//                 {movie.Title}
//             </p>
//           </div>
//         </div>
// }

// export default MovieCard;




import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;