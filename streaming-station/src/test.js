// import fetch from 'node-fetch';
const url = 'https://api.themoviedb.org/3/search/movie?query=meg&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGY0NzEyOWU5NDQxZGQ0ODU4ZDJjMTc4Njg2MjBmNyIsInN1YiI6IjY1OGVkMTEzY2EwZTE3N2U0M2JhNzU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aSrBRWYHR6KRna_JpT3W0ZzMkA4JRtlr0tmET4JQxww'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err)); 