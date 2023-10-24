import React, { useState } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


const MoviePage = () => {
    const [movieState, setMovieState] = useState(() => {
      return {
        MovieList: ["DieHard", "Harry Potter"]
      }
    });
  
    // Function to add a new movie to the list
    const addMovie = (newMovieName) => {
      setMovieState((prevMovieState) => ({
        MovieList: [...prevMovieState.MovieList, newMovieName]
      }));
    }
  
    return (
      <div className='container col-12 col-md-6 my-3 border'>
        <AddMovie addMovie={addMovie} />
        <MovieList MovieList={movieState.MovieList} />
      </div>
    );
  }

export default MoviePage;
