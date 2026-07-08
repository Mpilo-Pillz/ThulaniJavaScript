const apiKey = "";
const imdbID = "tt0848228";
const fetchData = async (searchTerm) => {
    const movies = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
    );
};

fecthMovieDetails = async () => {
    const movies = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );
    console.log("Movies data", await movies.json());
};

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const onInput = (event) => {
    fetchData(event.target.value);
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
