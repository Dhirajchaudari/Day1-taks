let input = document.querySelector(".input")
const btn = document.querySelector(".btn");
let results = document.querySelector(".results");


btn.addEventListener("click",function(e){
    let inputValue = input.value
    let apiKey = "44fac44a";
    let URL = `http://www.omdbapi.com/?apikey=${apiKey}&t=${inputValue}`;
    // const imagege = `http://www.omdbapi.com/?apikey=${apiKey}&`;


    fetch(URL)
    .then((respnse) => respnse.json())
    .then((res)=>{
    const movie = res;
    // const imagege = movie.Poster;

    const PosterUrl =`http://www.omdbapi.com/?apikey=44fac44a&&i=${movie.imdbID}`;
    console.log(movie.Poster)
    const html = `
    <div>
        <img scr="${PosterUrl}" alt="${movie.Title}">

        <p>Realeased in ${movie.Year}</p>
        <p>Imdb ratings: ${movie.imdbRating}</p>
        <p>Cast: ${movie.Actors}</p>
        <p>Directors: ${movie.Director}</p>
    </div>`
    ;
    results.innerHTML = html;
    })
})