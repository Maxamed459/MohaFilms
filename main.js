const MOVIE_API_KEY = `ae8115887a332015cc3739c9ecb9b70d`; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?`; 
const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

let movieContainer = document.querySelector(".movie-container");

const buildThedom = (results) => {
    results.forEach( movie =>{
        movieContainer.innerHTML += `<div class="movie">
                    <input type="hidden">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="flim image">
                    <div class="info">
                    <span class="movie-title">${movie.original_title}</span>
                    <div class="counts">
                        <div class="vote-average">
                            <span>${movie.vote_average}</span>
                        </div>
                        <div class="release-date">
                            <span>${movie.release_date}</span>
                        </div>
                    </div>
                    </div>
                </div>`
    });
}

const getMostPopularMovies = async () => {
    const request = await fetch(`${API_URL}api_key=${MOVIE_API_KEY}`);
    const {results} = await request.json();
    console.log(results);

    // build the dom
    buildThedom(results);
}
getMostPopularMovies()