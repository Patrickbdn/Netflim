import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList  =() => {
  return(
    <div>
      <p>Films populaire</p>
      <MovieCard/>
    </div>
  );
};

export default MovieList;