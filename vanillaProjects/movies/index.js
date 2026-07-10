const apiKey = secret;
const imdbID = "tt0848228";

const fetchData = async (searchTerm) => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
    );
    const data = await response.json()
    return data.Search
};

fecthMovieDetails = async () => {
    const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );
    console.log("Movies data", await response.json());

    const data = await response.json()
    return data.Search
};



const onInput = async (event) => {
    const movies = await fetchData(event.target.value);
    console.log("Movies==>", movies)
};

const input = document.querySelector("input", 500);
input.addEventListener("input", debounce(onInput));

// REference:
// let timeOutID;
// const onInput = (event) => {
//     if (timeOutID) {
//         clearInterval(timeOutID) should me clearTimeout
//         console.log("we have cancelled the pending code on the event loop")
//     }
//     console.log("===this will always run to create a new timeout")
//     timeOutID = setTimeout(() => {
//         fetchData(event.target.value);
//     }, 1000)
// }

// const onInput = debounce((event) => {
//   fetchData(event.target.value);
// });
