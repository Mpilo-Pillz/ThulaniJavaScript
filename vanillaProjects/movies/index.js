const apiKey = ''
const imdbID = "tt0848228"
const fetchData = async (searchTerm) => {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
}

fecthMovieDetails = async () => {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
    console.log("Movies data", await movies.json())
}
let timeOutID;
const onInput = (event) => {
    if (timeOutID) {
        clearInterval(timeOutID)
        console.log("we have cancelled the pending code on the event loop")
    }
    console.log("===this will always run to create a new timeout")
    timeOutID = setTimeout(() => {
        fetchData(event.target.value);
    }, 1000)
}

const input = document.querySelector('input')
input.addEventListener('input', onInput)

