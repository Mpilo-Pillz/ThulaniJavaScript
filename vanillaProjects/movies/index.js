const apiKey = ''
const imdbID = "tt0848228"
const fetchData = async (searchTerm) => {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
    // console.log("Movies", await movies.json())
}

fecthMovieDetails = async () => {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
    console.log("Movies data", await movies.json())
}

const input = document.querySelector('input', (event) => {
    fetchData(event.target.value);
})

