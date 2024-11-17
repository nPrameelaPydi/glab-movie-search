import "./App.css";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";

function App() {
  const apiKey = "ff957f4";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set movieData to data (response)
      setMovie(data);
    } catch (err) {
      console.error(err);
    }
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  return (
    <>
      <div className="App">
        <Form movieSearch={getMovie}></Form>
        <MovieDisplay movie={movie}></MovieDisplay>
      </div>
    </>
  );
}

export default App;
