import React, { useState } from 'react';

function AddMovie({ addMovie }) {
    const [movieName, setMovieName] = useState('');
  
    // Define a function to handle input changes
    function handleInputChange(e) {
      setMovieName(e.target.value);
    }
  
    // Define a function to handle form submission
    function handleAddMovie(e) {
      e.preventDefault(); // Prevent the default form submission
      addMovie(movieName); // Call the function passed from MoviePage to add the movie
      setMovieName(''); // Clear the input field
    }
  
    return (
      <div>
        <form onSubmit={handleAddMovie}>
          <div className="row text-white">
            <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
            <div className="col-8 offset-1">
              <input
                type="text"
                className="form-control"
                placeholder="Movie Name..."
                value={movieName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success form-control">
                Add
              </button>
            </div>
            <hr className="mt-3" />
          </div>
        </form>
      </div>
    );
  }
  

export default AddMovie;


