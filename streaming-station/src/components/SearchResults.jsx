import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

export default function SearchResults() {
  const [movieTitle, setMovieTitle] = useState("");
  const [{ results }, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      if (movieTitle.length < 3) return;
      const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY0NzEyOWU5NDQxZGQ0ODU4ZDJjMTc4Njg2MjBmNyIsInN1YiI6IjY1OGVkMTEzY2EwZTE3N2U0M2JhNzU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aSrBRWYHR6KRna_JpT3W0ZzMkA4JRtlr0tmET4JQxww",
        },
        signal: controller.signal,
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(() => data);
        console.log(data);
      } catch (err) {
        console.error("error:" + err);
      }
    }
    fetchMovies();
    return () => controller.abort();
  }, [movieTitle]);
  return (
    <div>
      <h1>
        SearchResults {movieTitle.length > 3 && "for"} {movieTitle}
      </h1>
      <input
        type="text"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      {results && results.map((movie) => <VideoCard key={movie.id} data={movie} />)}
    </div>
  );
}
